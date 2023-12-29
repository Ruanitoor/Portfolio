import Image from 'next/image'
import './styles/globals.css'
import {Header} from "./components/header/header"
import {Body} from "./components/header/body"

export default function Home() {
  return (
    <main>
      
      <Header></Header>
      <div></div>
      <Body></Body>
      <div className='menu'>
        <a>        </a>
        <a></a>
        <a></a>
      </div>
      <div>
          
      </div>
     
    </main>
  )
}
