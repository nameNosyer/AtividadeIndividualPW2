import style from "./Comment.modele.css"

import Trash from "../../assets/trash.svg"

export default function Comment({ message, photo }) {
  return (
    <div className="containerCom"> 
        <img src={photo} alt="Foto" />
        <p>{message}</p>
      <img src={Trash}/>
    </div>
  )
}