import axios from "axios"

const http = axios.create({
  timeout: 5 * 1000,
})
