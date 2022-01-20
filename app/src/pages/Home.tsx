
import cupOfpills from "../assets/svgs/cupOfpills.svg"
import googleIcon from "../assets/svgs/googleIcon.svg"
import crossOfPills from "../assets/svgs/crossOfPills.svg"
import enterIncon from "../assets/svgs/enterIcon.svg"

import "../styles/global.scss"
import "../styles/home.scss"

import { Modal } from "../components/Modal"
import { useState } from "react"

export function Home(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    return(
        <div className="content">

            <aside>
                <h1>
                    Nunca mais perca a hora de Tomar os Remédios
                </h1>
                <img src= {cupOfpills} alt="copo com pilulas"/>
            </aside>

            <main>
                
                <section className="mainHeader">
                    <h1>your</h1>
                    <img src={crossOfPills} alt="cruz de pilulas" />
                </section>

                <section className="signIN">
                    <form action="|">
                        <input type="email" placeholder="Digite o seu Gmail"/>
                        <input type="password" placeholder="Digite a sua senha" />
                        <div className="alternative">ou</div>
                        <button><span>Login</span></button>
                    </form>
                    <button onClick={()=> setIsModalVisible(true)} className="withoutLogin">
                        <span >Registrar-se</span>
                    </button>
                </section>
            </main>
            {isModalVisible ? <Modal onClose={()=> setIsModalVisible(false)}/> : null}
          
        </div>
    );
}