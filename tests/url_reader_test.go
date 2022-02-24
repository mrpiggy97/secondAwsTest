package tests

import (
	"net/http"
	"testing"

	"github.com/mrpiggy97/secondAwsTest/servers"
)

func TestUrlReader(testCase *testing.T) {
	var url string = "http://localhost:8000/api/v1/get-random-number"
	request, _ := http.NewRequest(
		"GET",
		url,
		nil,
	)
	var server *servers.MainServer = servers.NewMainServer()
	var isApiRequest bool = server.IsApiRequest(request)
	if isApiRequest != true {
		testCase.Error("isApiRequest is expected to be true")
	}
}
