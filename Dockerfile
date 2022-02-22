FROM node:lts AS builder
WORKDIR /secondAwsTest
COPY . /secondAwsTest
ENV REACT_APP_BASE_URL="https://frontend.test.mysite.fabianjrivasportfolio:8000"
RUN cd app && yarn install && yarn build

FROM golang:alpine
WORKDIR /finalApp
ENV ALLOWED_CROSS_SITE_ORIGIN="https://frontend.test.mysite.fabianjrivasportfolio.com"
COPY --from=builder /secondAwsTest .
RUN go mod tidy
RUN go build main.go
CMD ["./main"]