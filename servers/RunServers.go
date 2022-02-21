package servers

import (
	"time"

	"github.com/mrpiggy97/testingAwsBackend/multiplexer"
)

func RunServers() {
	go RunStaticServer()
	time.Sleep(time.Second * 2)
	go multiplexer.Runserver()
}
