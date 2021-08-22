import axios from 'axios'

const createInstance = (req) => axios.create({
  baseURL: 'http://host.com',
  // headers: {
  //   cookie: req.get('cookie') || ''
  // },
})

export default createInstance
