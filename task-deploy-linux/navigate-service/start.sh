#!/bin/sh
exec java -jar /app/app.jar --Dspring.config.location=/app/application.yml > /app/logs/application.log 2>&1