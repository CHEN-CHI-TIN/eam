#!/bin/bash

PATH_SERVICE=$(pwd)/main/service/
docker container prune -f
docker image prune -a -f
docker volume prune -f
docker system prune -a -f

docker compose up --build -d

############################ 
# SUPABASE
# https://supabase.com/docs/guides/self-hosting/docker
############################

# docker compose -f ${PATH_SERVICE}/supabase/docker/docker-compose.yml \
#     up --build -d
