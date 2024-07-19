# 网站

这个网站是使用 [Docusaurus](https://docusaurus.io/) 构建的，一个现代的静态网站生成器。

### 安装

```
$ yarn
```

### 本地开发

```
$ yarn start
```

这个命令启动一个本地开发服务器并打开一个浏览器窗口。大多数更改会实时反映，而无需重启服务器。

### 构建

```
$ yarn build
```

这个命令会生成静态内容到 `build` 目录，可以使用任何静态内容托管服务来进行服务。

### 部署

使用 SSH：

```
$ USE_SSH=true yarn deploy
```

不使用 SSH：

```
$ GIT_USER=<你的 GitHub 用户名> yarn deploy
```

如果你使用 GitHub Pages 进行托管，这个命令是一个方便的方式来构建网站并推送到 `gh-pages` 分支。
