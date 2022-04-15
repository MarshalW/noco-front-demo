# noco front demo

演示如何简单使用 nocobase 前端。

## 构建 nocobase

```bash
 clone 项目
git clone https://github.com/nocobase/nocobase.git

# 切换到nocobase-next分支
cd nocobase
git checkout nocobase-next

# 构建
npm i
npm run bootstrap
npm run build
```

## 构建本系统


```bash
# clone 项目
git clone https://github.com/MarshalW/noco-next-demo.git

# 安装依赖包
yarn

# 将nocobase中需要的package复制到 ./node_modules
# ../nocobase/ 是nocobase的相对路径或者绝对路径
./cp-nocobase-packages.sh ../nocobase/

# 启动
yarn start

```
