import { Modal, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import {Algo} from "./algo"

export const Joaco = () => {
    const [showModel, setShowModel] = useState(false)
    const [genero, setGenero] = useState("");

    const handleLogin = () => {
        setShowModel(!showModel);
    }

    const handleGenre = ({target}) => {
        setGenero(target.value);
    }

    const handleDefault = (e) => {
        e.preventDefault()
    }

    
  return (
    <div>
        <h1>Es gay?</h1>
        <hr/>
        <form onSubmit={handleDefault}>
            <input type="text"
                    name='genero'
                    autoComplete='off'
                    placeholder='El nombre'
                    onChange={handleGenre}/>
            <Button type='submit'
                    onClick={handleLogin}
                    className="ms-1">
                es gay?
            </Button>
        </form>
        
        <Modal show={ showModel } 
        className={ "animate__animated " + (showModel ? "animate__jackInTheBox" : "animate__backOutDown")}
        onHide={handleLogin}>
            <Modal.Header closeButton>
              Es gay
            </Modal.Header>
            <Modal.Body>
              {genero.toLowerCase() === "jaime" ? <div>Efectivamente, {genero} tiene la tremenda diuca</div>
                : genero.toLocaleLowerCase() === "jaime velasquez" ? <div>Efectivamente, {genero} tiene la tremenda diuca</div>
                : <Algo genero={genero}/>
              }
                  
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleLogin}>Aceptar</Button>
            </Modal.Footer>
          </Modal>
    </div>
  )
}
