import express from 'express'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Routes from '../Routes'

const app = express()
app.use(express.static('public'))


app.get('/', (req, res) => {
  const content = renderToString((
    <StaticRouter location={req.path} context={{}}>
      {Routes}
    </StaticRouter>
  ))
  res.send(`
  <html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    </body>
  </html>
  `)
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})