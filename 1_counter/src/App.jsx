import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  let addValue = () => {
    setCount( prevcount => prevcount + 1  )
  }
  let removeValue = () => {
    if(count > 0) {
      setCount( prevcount => prevcount - 1  )
    }
    else {
      alert("Value cann't be less than 0")
    }
  }

  return (
    <>
    <h1>Counter By HK</h1>
    <h2>Counter Value : {count} </h2>
    <button onClick={addValue}>
      Add Value
    </button>
    <button onClick={removeValue}>
      Remove 
    </button>
    </>
  )
}

export default App
