import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../containers/Home'

const app = express()
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      <div id="root">${renderToString(<Home />)}</div>
      <script src="/index.js"></script>
    </body>
  </html>
  `)
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})