import express from 'express'
import Home from './containers/Home'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(renderToString(<Home />))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})