import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(r => r.data)

const create = newObject => axios.post(baseUrl, newObject).then(r => r.data)

export default {
  getAll,
  create
}
