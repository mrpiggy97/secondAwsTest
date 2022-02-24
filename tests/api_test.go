package tests

import (
	"io"
	"net/http"
	"testing"
	"time"

	"github.com/mrpiggy97/secondAwsTest/servers"
	"github.com/rs/zerolog/log"
)

func TestApi(testCase *testing.T) {
	go servers.RunServer()
	time.Sleep(time.Second * 1)
	var client *http.Client = new(http.Client)
	request, requestError := http.NewRequest(
		"GET",
		"http://localhost:5000/api/v1/get-random-number",
		nil,
	)
	if requestError != nil {
		testCase.Error(requestError.Error())
	}
	response, responseError := client.Do(request)
	if responseError != nil {
		testCase.Error(responseError)
	}
	if response.StatusCode != 202 {
		testCase.Error(response.Status)
	} else {
		decodedResponse, _ := io.ReadAll(response.Body)
		log.Info().Msg(string(decodedResponse))
	}
}
