import React from 'react'
import Form from '../Form/Form'
import ModalContainer from './ModalContainer'

const NewBoardModal = (props) => {
  return (
    <ModalContainer {...props}>
        <div className='container'>
            <Form action="" method="post" >
                <input type="text" name='name' required/>
                <button>Enviar</button>
            </Form>
        </div>

    </ModalContainer>
  )
}

export default NewBoardModal