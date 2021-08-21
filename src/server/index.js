import express from 'express'
import { render } from './utils'

const app = express()
app.use(express.static('public'))


app.get('*', (req, res) => {
  res.send(render(req))
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})