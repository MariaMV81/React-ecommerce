export default function Footer(){
    return(
        <>
        <footer className="container-footer">
            <div className="container-left">
                <ul>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Sobre mi</a></li>
                </ul>
                    <ul>
                        <li><a href="#">Sobre mi</a></li>
                        <li><a href="#">Sobre mi</a></li>
                        <li><a href="#">Sobre mi</a></li>
                        <li><a href="#">Sobre mi</a></li>
                    </ul>
            </div>
            <div className="container-right">
                <div className="container-top">
                    <h3>Suscribete a mi New Letter</h3>
                    <p>Solo envio emails bonitos =)</p>
                    <label>Email</label>
                    <input placeholder="email"/>
                    <button >Enviar</button>
                </div>
                    <div className="container-botom">
                        <h3>Sigueme en mis redes:</h3>
                       <ul>
                            <li>linkedin</li>
                            <li>facebook</li>
                            <li>instagram</li>
                        </ul> 
                    </div>
            </div>

        </footer>
        </>
    )
}