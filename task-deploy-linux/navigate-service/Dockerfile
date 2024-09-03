FROM openjdk:11-jre-slim
LABEL authors="dxy"
RUN mkdir -p /app/logs
WORKDIR /app
COPY navigate.jar /app/app.jar
COPY start.sh /app/start.sh
COPY application.yml /app/application.yml
RUN chmod +x /app/start.sh
EXPOSE 8090
VOLUME ["/app/logs"]
ENTRYPOINT ["/app/start.sh"]