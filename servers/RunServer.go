package servers

import (
	"net/http"

	"github.com/rs/zerolog/log"
)

func RunServer() {
	var message string = "server started listening at port 5000"
	log.Info().Msg(message)
	var server *MainServer = NewMainServer()
	http.ListenAndServe("0.0.0.0:5000", server)
}
