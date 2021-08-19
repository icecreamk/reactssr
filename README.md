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

### react csr
- react代码在浏览器执行，消耗用户浏览器的性能
  
### react ssr
- react代码在服务器执行，消耗服务器的性能


```javascript
import { renderToString } from 'react-dom/server'
```
由于`renderToString`只是将react代码简单转成string，
因此ssr渲染时，事件不会响应。通过`同构`来解决这这样的问题。

#### 同构
- 相同的代码在服务器执行一次，客户端再执行一次（服务器代码负责渲染页面，客户端代码负责执行事件）