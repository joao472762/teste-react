import "../styles/global.scss"
import "../styles/modal.scss"
type modalProps ={

    onClose: () => void
}


export function Modal(props:modalProps){
    
    return(
        <div className="modalContent">
            <section >
                <h1>
                    Registre-
                </h1>
                <form action="">
                    <label htmlFor="userName" >Name</label>
                    <input id="userName" type="text" placeholder="digite o seu nome"/>
                    <label htmlFor="Useremail">Email</label>
                    <input id="userEmail" type="email" placeholder="digitesueemail@gmail.com"/>
                    <label htmlFor="userNumber">Numero</label>
                    <input id="userNumber"type="number" placeholder="24 99444448" />
                    <label htmlFor="userPasswordxx"></label>
                    <input id="userPassword" type="password" placeholder="digite a sua senha ***" />
                    
                </form>
                <div className="modalFooter">
                    <button onClick={props.onClose}>Cancelar</button>
                    <button onClick={props.onClose}>Salvar</button>
                </div>
            </section>
        
        </div>
    );
}