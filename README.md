#### Infrastructure

Docker compose config for proxy upstream node servers behind SSL ( Let's Encrypt ) Nginx. 

#### Stack:
* docker
* nginx ( Let's Encrypt )
* node


#### Let's Encrypt:
* make sure .env file is set-up
* after its been built and up via docker-compose, install certs via `docker-compose exec nginx /etc/nginx/ssl/certbot.sh -v` ( see below )


#### Install
```
#!/bin/bash

. host_docker.sh
docker-compose build
docker-compose up -d
# install certs
docker-compose exec nginx /etc/nginx/ssl/certbot.sh -v
```

#### Todo:
* Cron task for cert updates
