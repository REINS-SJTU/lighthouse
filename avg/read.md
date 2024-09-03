### 拉取镜像并运行说明文档

#### 1. 拉取镜像

首先，确保你的机器已经安装了Docker，并且具有足够的权限来执行Docker命令。

```sh
docker pull registry.cn-hangzhou.aliyuncs.com/ddd369/avg:[版本号]
```

这将从阿里云的Registry拉取标签为 `1.0` 的 `registry.cn-hangzhou.aliyuncs.com/ddd369/avg` 镜像。

#### 2. 运行镜像

接下来，运行镜像，并将容器内的 `8090` 端口映射到宿主机的某个端口（例如 `8080`）上。

```sh
docker run --platform linux/amd64 -d -p 8090:8090 -v $(pwd):/app/logs registry.cn-hangzhou.aliyuncs.com/ddd369/avg:[版本号]
```

- `-d` 表示在后台运行容器。
- `-p 8080:8090` 表示将宿主机的 `8080` 端口映射到容器内的 `8090` 端口。
- `registry.cn-hangzhou.aliyuncs.com/ddd369/avg:1.0` 是你刚刚拉取的镜像名称。

#### 3. 准备MongoDB数据库

项目依赖MongoDB数据库，需要确保MongoDB已经安装并且运行。以下是一些基本步骤：

- **安装MongoDB**：
  可以通过官方网站或者操作系统的包管理工具安装MongoDB。

- **启动MongoDB服务**：
  启动MongoDB服务，确保它运行在默认端口 `27017` 或者你配置的端口上。

- **创建Avg数据库**：
  使用MongoDB客户端连接到MongoDB，并创建三个集合（Collection）：`AIS`，`Car`，`Road`。

  ```javascript
  use AVG;
  db.createCollection("AIS")
  db.createCollection("Car")
  db.createCollection("Road")
  ```
  可以将下面的数据导入数据库,测试时Car需要手动设置roadId（在road中Valid属性需要为1)，
* ais数据会根据传入的小车消息自动写入，但缺少speed信息，最好根据测试小车的信息，提前插入一条speed属性不为0的信息
* carName和carID是相同的。speed的单位是cm，40.0表示40cm每秒
* car和ais中小车的数量最好保持一致






