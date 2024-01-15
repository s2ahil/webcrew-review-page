import { useState } from 'react'

import { Appbar, Front } from "./components/ManagePages.js"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <Appbar></Appbar> */}
    
      <Front></Front>

    </>
  )
}

export default App
