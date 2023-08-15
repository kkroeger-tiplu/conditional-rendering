import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isLoading, setsetIsLoading] = useState(false);
  const [count, setCount] = useState<number>(0);

  let reactElement = <div>Hello this is <span>{count}</span> click</div>
  
  if(isLoading)
  {
    reactElement = <div>Loading View after <span>{count}</span> click</div>
  }


  useEffect(() => {
    const timer = setTimeout(() => setsetIsLoading(false), 500);

    return () => clearTimeout(timer);
  }, [count])

  return (
    <>
      <h1 onClick={() => {
        setsetIsLoading(true)
        setCount(count +1)
      }}>Hello World</h1>
      {reactElement}
    </>
  )
}

export default App
