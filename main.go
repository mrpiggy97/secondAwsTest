package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/julienschmidt/httprouter"
)

func main() {
	var router *httprouter.Router = httprouter.New()
	var currentTime time.Time = time.Now()
	message := fmt.Sprintf("server started listening %v", currentTime)
	fmt.Println(message)
	router.ServeFiles("/*filepath", http.Dir("./app/build"))
	http.ListenAndServe("0.0.0.0:5000", router)
}
