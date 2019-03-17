#!/bin/bash

# install certs
docker-compose exec nginx /etc/nginx/ssl/certbot.sh -v
