FROM node:lts AS builder
WORKDIR /secondAwsTest
COPY . /secondAwsTest
RUN cd app && yarn install

FROM golang:alpine
WORKDIR /finalApp
COPY --from=builder /secondAwsTest .
RUN go mod tidy
RUN go build main.go
CMD ["./main"]