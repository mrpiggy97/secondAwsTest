FROM node:lts AS builder
WORKDIR /secondAwsTest
COPY . /secondAwsTest
ENV REACT_APP_BASE_URL="http://backend.test.mysite.local:8000"
RUN cd app && yarn install && yarn build

FROM golang:alpine
WORKDIR /finalApp
COPY --from=builder /secondAwsTest .
RUN go mod tidy
RUN go build main.go
CMD ["./main"]