const req = new XMLHttpRequest()
req.open("GET", "https://jsonplaceholder.typicode.com/todos/1")
req.send()
req.onload = () => {
  if(req.status === 200) {
    console.info(JSON.parse(req.response))
  } else {
    console.error('There was a problem with your request')
  }
}

