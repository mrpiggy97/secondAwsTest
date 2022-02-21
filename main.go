package main

import (
	"sync"

	"github.com/mrpiggy97/secondAwsTest/servers"
)

func main() {
	var waiter *sync.WaitGroup = new(sync.WaitGroup)
	waiter.Add(1)
	servers.RunServers()
	waiter.Wait()
}
