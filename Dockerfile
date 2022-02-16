FROM node:lts AS builder
WORKDIR /secondAwsTest
COPY . /secondAwsTest
RUN cd app && yarn install

FROM golang:alpine
WORKDIR /finalApp
ENV REACT_APP_BASE_URL="http://backend.test.api.local:8000"
COPY --from=builder /secondAwsTest .
RUN go mod tidy
RUN go build main.go
CMD ["./main"]