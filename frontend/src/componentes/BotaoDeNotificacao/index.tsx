import icon from '../../assets/imagens/Vector.svg'
import './Style.css'

function BotaoDeNotificacao() {
    return(
      <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar!"/>
      </div>

    )
  }

  export default BotaoDeNotificacao