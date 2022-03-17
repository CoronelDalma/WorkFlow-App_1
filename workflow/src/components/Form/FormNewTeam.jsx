import React from 'react'
import Form from './Form'
import FormInput from './FormInput'

import { addTeam } from "../../api/teams";

const FormNewTeam = ({onNewTeam, closeModal}) => {
    const add = (e) => {
        e.preventDefault();
        console.log(e.target)
        const newTeam = {
            id: new Date().getTime().toString(),
            name: e.target.name.value,
            description: e.target.description.value,
            cover: e.target.cover.value?e.target.cover.value:""
        };
        console.log(newTeam);
       /*onNewTeam(newTeam);*/
       /* closeModal();*/
    }
  return (
    <Form onSubmit={add} >
        <FormInput type={'text'} name={'name'} label={'Nombre del equipo'} />
        <FormInput type={'text'} name={'description'} label={'Descripción'} />
        <FormInput type={'text'} name={'cover'} label={'URL Portada'} />
        <button type='submit' className='my-4'>Crear equipo</button>
  </Form>

  )
}

export default FormNewTeam