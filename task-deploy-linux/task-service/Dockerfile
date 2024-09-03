FROM openjdk:8-jre-slim
LABEL authors="zhd"
RUN mkdir -p /app/logs
WORKDIR /app
COPY task.jar /app/app.jar
COPY start.sh /app/start.sh
COPY application.yml /app/application.yml
RUN chmod +x /app/start.sh
EXPOSE 8080
VOLUME ["/app/logs"]
ENTRYPOINT ["/app/start.sh"]