# reactssr

#### ssr 服务端渲染

##### 支持服务端渲染的主流框框
- next.js（react）
- nuxt.js（vue）

#### csr 客户端渲染
TTFP（首屏展示时间较长）
不利于SEO


#### csr过程
- 浏览器请求html文档（文档是没有具体内容）
- 浏览器请求js文件
- 运行js文件
- 渲染dom

#### ssr过程
- 浏览器请求html文档（文档带有具体内容）

### react ssr过程
- 浏览器发生请求
- 服务器运行React代码生成页面
- 服务器返回页面