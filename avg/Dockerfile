FROM openjdk:11-jre-slim
LABEL authors="dxy"
RUN mkdir -p /app/logs
WORKDIR /app
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh
EXPOSE 8090
VOLUME ["/app/logs"]
ENTRYPOINT ["/app/start.sh"]