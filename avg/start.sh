#!/bin/sh
# Redirect stdout and stderr to a log file
exec java -jar /app/app.jar --Dspring.config.location=/app/application.yml > /app/logs/application.log 2>&1