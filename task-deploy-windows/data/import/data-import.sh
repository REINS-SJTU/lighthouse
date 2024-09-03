#!/bin/sh

# 导入 MySQL 数据
mysql -u root -p123456 entrance < /docker-entrypoint-initdb.d/entrance.sql

# 导入 MongoDB 数据
mongoimport  --host localhost --port 27027 --authenticationDatabase admin --db AVG --collection AIS --type csv --file ./data/mongo/AVG.AIS.csv --headerline
mongoimport  --host localhost --port 27027 --authenticationDatabase admin --db AVG --collection Road --type csv --file ./data/mongo/AVG.Road.csv --headerline
mongoimport  --host localhost --port 27027 --authenticationDatabase admin --db AVG --collection Car --type csv --file ./data/mongo/AVG.Car.csv --headerline