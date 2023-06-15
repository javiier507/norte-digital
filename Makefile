current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
SHELL = /bin/sh

# variables

VERSION := ''
USERNAME := ''

# release

docker-build:
	docker build -t profiledev06/backend-test:$(VERSION)

docker-login:
	docker login -u $(USERNAME)

docker-push:
	docker push profiledev06/backend-test:$(VERSION)

release: docker-build docker-login docker-push
	@echo "🏃‍ Finished!"

# run containers

up-database:
	docker-compose up -d database

stop-database:
	docker-compose stop database

up-api:
	docker-compose up api

stop-api:
	docker-compose stop api

down:
	docker-compose down

# git

git-push:
	git push -u origin master
