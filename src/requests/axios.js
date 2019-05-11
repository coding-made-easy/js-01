import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => console.log(res.data))
  .catch(err => {
    console.warn('There was a problem with your request')
    console.error(err)
  })

// const awaitAxios = async () => {
//   try {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(res.data)
//   } catch(err) {
//     console.error(err)
//   }
// }

// awaitAxios()