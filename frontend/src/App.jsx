import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [jokes, setjokes] = useState([])
  useEffect(() => {
    axios.get("/api/jokes").then((response)=>{
      setjokes(response.data)
    }).catch((error)=>{
      console.log(error)
    })
 
  }, [])
  

  return (
    <>
      <h1>Full stack</h1>
      <p>jokes:{jokes.length}</p>
      {jokes.map((items)=>(
        <div key={items.id}>
          <h3>
            {items.title}
          </h3>
          <p>
            {
              items.content
            }
          </p>
        </div>
      ))}
    </>
  )
}

export default App
