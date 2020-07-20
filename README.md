# vue-blog

## 快速起步

安装：

```bash
npm i
# OR
cnpm i
```

运行：

```bash
npm run dev
# OR
npm run serve
```

打包：

```bash
npm run build
```

发布前没有写入权限的处理：

```bash
# 在项目根目录下运行：
cd .git
sudo chmod -R g+ws *
# 输入密码回车,成功后回到项目目录
```

自动发布：

```bash
bash publickey.sh

sudo npm run push "提交的说明文案，注意千万不能有空格"
```
