import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Header from './components/Header'
import { useState } from 'react'
import left from './assets/left.svg'
import right from './assets/right.svg'

function App() {

  const [active, setActive] = useState(false)

  const handleClickActive = () => {
    setActive(!active)
    console.log("se hizo click aqui en el botn del bheader bonito ese ")
    
  };
  

  return (
    <>
      <Sidebar
        svgL={active ? <img src={right} alt="" /> : <img src={left} alt="" />}
        onClick={handleClickActive}
        className={`w-64 ${active ? `-translate-x-full md:-translate-x-[92%]` : `translate-x-0`} `}
      />
      <Header onClick={handleClickActive} />
      <main className={`p-4 transition-all  ${active ? "sm:ml-5" : "sm:ml-64"} mt-[60px] border-2`}>
        <Content />
      </main>
    </>
  )
}

export default App