
import cupOfpills from "../assets/svgs/cupOfpills.svg"
import googleIcon from "../assets/svgs/googleIcon.svg"
import crossOfPills from "../assets/svgs/crossOfPills.svg"
import enterIncon from "../assets/svgs/enterIcon.svg"

import "../styles/global.scss"
import "../styles/home.scss"

export function Home(){
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
                    <button>
                        <img src={googleIcon} alt="iconne do google" />
                        <span>Acessar com o Google</span>
                    </button>
                    <div className="alternative">ou</div>
                    <button className="withoutLogin">
                        <img src={enterIncon} alt='icone de entrar'/>
                        <span>Entrar Sem Login</span>
                    </button>
                </section>

            </main>
        </div>
    );
}