import axios, { AxiosResponse, AxiosError } from 'axios'
import logService from '@utils/logService'

interface RequestOptions {
  params?: any
  headers?: any
}

async function get<T>(url: string, options?: RequestOptions): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(url, options)
    return response.data
  } catch (error) {
    handleRequestError(error as AxiosError)
    throw error
  }
}

async function post<T>(
  url: string,
  data: any,
  options?: RequestOptions
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.post(url, data, options)
    return response.data
  } catch (error) {
    handleRequestError(error as AxiosError)
    throw error
  }
}

async function put<T>(
  url: string,
  data: any,
  options?: RequestOptions
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.put(url, data, options)
    return response.data
  } catch (error) {
    handleRequestError(error as AxiosError)
    throw error
  }
}

async function del<T>(url: string, options?: RequestOptions): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.delete(url, options)
    return response.data
  } catch (error) {
    handleRequestError(error as AxiosError)
    throw error
  }
}

function handleRequestError(error: AxiosError): void {
  if (error.response) {
    logService.error(
      `Request failed: ${error.response.status} ${error.response.data}`
    )
  } else if (error.request) {
    logService.error(`No response received: ${error.request}`)
  } else {
    logService.error(`Could not set request: ${error.message}`)
  }
}

const backendService = {
  get,
  post,
  put,
  delete: del,
}

export default backendService
