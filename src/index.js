import express from 'express'
import Home from './containers/Home'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      ${renderToString(<Home />)}
      <script src="/index.js"></script>
    </body>
  </html>
  `)
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})