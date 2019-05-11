fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(res => console.info(res))
  .catch(err => console.error('There was a problem with your request', err))

// const awaitFetch = async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1'),
//           resJson = await res.json()
//     console.log(resJson)
//   } catch(err) {
//     console.error(err)
//   }
// }

// awaitFetch()