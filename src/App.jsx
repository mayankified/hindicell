import React from 'react'
import { Header, Hero,Events,Faculty,Footer,Magazine ,Mem1,Members} from './Components/index'
import './Styles/styles'
import './Styles/App.css'
import {member} from './Constants/index.js'
// import styles from './Styles/styles'

const App = () => {

  const adv= member.filter((mem)=>(mem.year==='4th'))
  const sen= member.filter((mem)=>(mem.year==='3rd'))
  const soph= member.filter((mem)=>(mem.year==='2nd'))

  return (
    <div className=' bg-kesri'>
      <Header />
      <Hero />
      <Events/>
      <Magazine/>
      <Faculty/>
      <Members data={adv} name={'सलाहकार'} />
      <Mem1 data={sen} name={'वरिष्ठ समिति सदस्य'} />
      <Mem1 data={soph} name={'कनिष्ठ समिति सदस्य'} />

      <Footer/>
    </div>
  )
}

export default App;