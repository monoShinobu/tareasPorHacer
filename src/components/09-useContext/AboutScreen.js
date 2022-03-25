import { Modal, Button } from 'react-bootstrap'
import React, { useState } from 'react'


export const AboutScreen = () => {
  const [showModel, setShowModel] = useState(false)
  const [peso, setPeso] = useState();
  const handlemodal= () => {
    setShowModel(!showModel);
  }

  const handleAdd = (e) => {
      e.preventDefault();
  }

  const juanito = ({target}) => {
    setPeso(target.value)
  }

  return (
    <div>
        <h1>AboutScreen</h1>
        <hr/>

        <form onSubmit={handleAdd}>
          <input type="number" 
                name="peso"
                autoComplete="off"
                placeholder="Tu peso"
                onChange={juanito}
                />
          <Button 
              type='submit'
              className='btn btn-primary ms-1'
              onClick={handlemodal} >
                  Agregar
          </Button>
        </form>
        

        <Modal show={ showModel }>
          <Modal.Header closeButton>
            Debo poner un titulo
          </Modal.Header>
          <Modal.Body>
            Tu peso es de {peso}Kg
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => handlemodal()} >Aceptar</Button>
          </Modal.Footer>
        </Modal>

    </div>
  )
}
