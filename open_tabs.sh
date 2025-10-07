#!/bin/bash

DOCKER_COMPOSE_DIR=$(pwd)

osascript -e "tell application \"Terminal\"
    do script \"cd $DOCKER_COMPOSE_DIR && docker-compose exec python bash -c 'python app.py'\"
end tell"

osascript -e "tell application \"Terminal\"
    do script \"cd $DOCKER_COMPOSE_DIR && docker-compose exec node sh -c 'npm start'\"
end tell"