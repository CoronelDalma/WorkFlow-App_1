import React from 'react'
import Form from '../Form/Form'
import FormInput from '../Form/FormInput'
import ModalContainer from './ModalContainer'

const NewBoardModal = (props) => {
  return (
    <ModalContainer {...props}>
        <div className='container m-0'>
            <Form action="" method="post" >
                <FormInput type={'text'} name={'name'} label={'Nombre del equipo'} />
                <FormInput type={'text'} name={'descripcion'} label={'Descripción'} />
                <button className='my-4'>Enviar</button>
            </Form>
        </div>

    </ModalContainer>
  )
}

export default NewBoardModal