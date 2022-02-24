package servers

import (
	"net/http"
	"strings"

	"github.com/julienschmidt/httprouter"
	"github.com/mrpiggy97/testingAwsBackend/multiplexer"
)

type MainServer struct {
	ApiServer    *multiplexer.Server
	StaticServer *httprouter.Router
}

func (serverInstance *MainServer) IsApiRequest(request *http.Request) bool {
	var url string = request.URL.Path
	var urlSlice []string = strings.Split(url, "/")
	if len(url) <= 0 {
		return false
	}
	if urlSlice[1] == "api" {
		return true
	} else {
		return false
	}
}

func (serverInstance *MainServer) ServeHTTP(writer http.ResponseWriter, request *http.Request) {
	var isApiReq bool = serverInstance.IsApiRequest(request)
	if isApiReq {
		serverInstance.ApiServer.ServeHTTP(writer, request)
	} else {
		serverInstance.StaticServer.ServeHTTP(writer, request)
	}
}

func getStaticServer() *httprouter.Router {
	var router *httprouter.Router = httprouter.New()
	router.ServeFiles("/*filepath", http.Dir("./app/build"))
	return router
}

func NewMainServer() *MainServer {
	var staticServer *httprouter.Router = getStaticServer()
	var apiServer *multiplexer.Server = multiplexer.NewServer()
	var server *MainServer = &MainServer{
		StaticServer: staticServer,
		ApiServer:    apiServer,
	}
	return server
}
