import Image from "next/image"
import "./header.scss"

export function Header(){
        return(
            <main>
            <div className="header">
            <div className="lado">
            <div className='name'>
               <span>Ruan</span>
               <span>             </span>
               <span className='name2'>  Pardim</span>
            </div>
            </div>
            <div className="sobre">
                                     <p>Sobre mim</p>
                                     <p>Projetos</p>
                                     <p>Habilidades</p>
                                     </div>  
                 
            <div className="customButton">
                Contate-me
            </div>
                

            </div>
            </main>
        )
         

}
