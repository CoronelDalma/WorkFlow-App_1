import React from 'react'
import Form from '../Form/Form'
import FormInput from '../Form/FormInput'
import ModalContainer from './ModalContainer'

const NewBoardModal = (props) => {
  const {add} = props;

  const addTeam = (event) =>{
    event.preventDefault();
    console.log("agrego team aqui");
    /*add(event);*/
  }
  return (
    <ModalContainer {...props}>
        <div className='container m-0'>
            <Form onSubmit={addTeam} >
                <FormInput type={'text'} name={'name'} label={'Nombre del equipo'} />
                <FormInput type={'text'} name={'description'} label={'Descripción'} />
                <FormInput type={'text'} name={'cover'} label={'URL Portada'} />
                <button type='submit' className='my-4'>Crear equipo</button>
            </Form>
        </div>

    </ModalContainer>
  )
}

export default NewBoardModal