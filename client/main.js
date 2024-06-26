


import { xhrPromise } from "./lib/index.js";

// await 병 
// Promise를 잘 이해하고 있으면 됨

const getData = async () => {
  const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users')

  console.log(data)
}

// getData()











