import fetch from 'isomorphic-fetch'

const isFunction = (fn) => {
  return !!fn && typeof fn == 'function'
};

const fetchJSON = (path, opts={}) => {
  const cfg = {
    headers : new Headers(),
  };
  // https://github.com/matthew-andrews/isomorphic-fetch/issues/34#issuecomment-218335938
  cfg.headers.append('Content-Type','application/json');
  
  if(opts.method){
    cfg.method = opts.method;
  }
  
  if(opts.body){
    cfg.body = (typeof opts.body !== 'string' 
      ? JSON.stringify(opts.body) 
      : 
      opts.body)
  }
  
  return new Promise((resolve,reject) => {
    fetch(`http://localhost:3000${path}`, cfg)
      .then((res)=>{
        if(res.status >= 400){
          throw new Error(`${res.status} ${res.statusText}`);
        } else {
          return res.json()
        }
      })
      .then(xhr => {
        if(isFunction(opts.success)){
          opts.success(xhr)
        } else {
          resolve(xhr)
        }
      })
      .catch((error) => {
        if(isFunction(opts.error)){
          opts.error(error)
        } else {
          reject(error)
        }
      })
    })
}

export default fetchJSON