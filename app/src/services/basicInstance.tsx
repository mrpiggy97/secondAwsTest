import axios,{AxiosRequestConfig,AxiosInstance} from 'axios'

export const basicConfig : AxiosRequestConfig = {
    baseURL : process.env.REACT_APP_BASE_URL
}

export const basicInstance : AxiosInstance = axios.create(basicConfig)