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

#### 同构过程
- 服务器预运行react代码渲染html
- 发送html给浏览器
- 浏览器展示html内容
- 浏览器加载js文件（客户端的react代码）
- js中React代码在浏览器端重新执行
- js中的React代码接管页面操作

#### 前端路由
- 前端代码根据url返回不同路由的内容

#### 服务端路由
- 由于服务器无法知道url变化，所以需要通过get监听url`express中通过app.get`，最终路由代码在服务也执行一次
- 服务器渲染只发生页面的第一次进入的时候，后面由前端的js代码接管页面，因此后续再点击切换路由时候，服务器不会重新执行路由