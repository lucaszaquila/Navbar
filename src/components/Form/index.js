import React from 'react';
import './Form.css';
import Input from '../Input';
import Button from '../Button';

function Form() {
  return <form><Input name="Nome Completo"/><Button type="submit" name="OK"/></form>;
}

export default Form;