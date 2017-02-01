import fetch from 'isomorphic-fetch'

const isFunction = (fn) => {
  return !!fn && typeof fn == 'function'
};

const fetchJSON = (path, opts={}) => {
  fetch(`http://localhost:3000${path}`)
    .then((res)=>{
      if(res.status >= 400){
        throw new Error(`${res.status} ${res.statusText}`);
      } else {
        return res.json()
      }
    })
    .then(xhr => {
      if(isFunction(opts.success)){
        console.log('|fetchJSON| calling success callback');
        opts.success(xhr)
      } else {
        throw new Error('a success callback must be provided to fetchJSON()')
      }
    })
    .catch((error) => {
      if(isFunction(opts.error)){
        opts.error(error)
      } else {
        console.log('|fetchJSON| an error occured, but no callback was provided');
        throw new Error(error)
      }
    })
}

export default fetchJSON