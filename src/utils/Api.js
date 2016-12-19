import API_CREDENTIALS from '../../config/api_credentials'

const Api = class {
  
  constructor(){
    console.log('hello')
  }
  
  refreshKey(){
    console.log('refreshing...')
  }
  
}

export let api = new Api();