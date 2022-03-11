import React from 'react'
import Button from '../Buttons/Button'
import Form from '../Form/Form'
import FormInput from '../Form/FormInput'
import ModalContainer from './ModalContainer'

const InvitationModal = (props) => {
  return (
    <ModalContainer {...props}>
        <div className='container m-0'>
            <Form action="" method="post" >
                <label>Para el equipo de trabajo:</label>
                <FormInput type={'email'} name={'email'} label={'Email'} />
                <FormInput type={'text'} name={'role'} label={'Rol'}/>
                <FormInput type={'text'} name={'Descripción'} label={'Descripción'} />

                <Button >Enviar</Button>
            </Form>
        </div>

    </ModalContainer>
  )
}

export default InvitationModal