import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import { getStore } from '../store'
import { render } from './utils'
import routes from '../Routes'

const app = express()
app.use(express.static('public'))

// 浏览器端api重定向
app.use('/api', proxy('http://host.com', {
  proxyReqPathResolver: function (req) {
    // /api/news
    // req.url = news
    // return /v1.0/api/ + req.url
    return '/v1.0' + req.url
  }
}))

app.get('*', (req, res) => {
  const store = getStore()
  const matchedRoutes = matchRoutes(routes, req.path)
  const promise = []
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promise.push(item.route.loadData(store))
    }
  })
  Promise.all(promise).then(() => {
    res.send(render(store, routes, req))
  })
  // res.send(render(store, routes, req))
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})