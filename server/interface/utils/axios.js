import axios from 'axios'

const instance = axios.create({
  baseURL: `http://${process.env.HOST || '127.0.0.1'}:${process.env.PROT || 3000}`,
  timeout:2000,
  headers:{
    
  }
})

//导出
export default instance;
