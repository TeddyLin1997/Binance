import React, { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { FormItem, Label, Input, Look } from './style'
import canSee from '../../assets/images/can-see.svg'
import cannotSee from '../../assets/images/cannot-see.svg'

interface FormInput {
  label: string;
  value: UseFormRegisterReturn;
  type?: 'text' | 'password' | 'email' | 'number';
}

const FormInput = ({ label, value, type }: FormInput) => {
  const [ isBlank, setIsBlank ] = useState(true)
  const handleBlank = () => setIsBlank(prev => !prev)
  const getType = () => (type === 'password' && !isBlank) ? 'text' : type || 'text'

  return (
    <FormItem>
      <Label>{ label }</Label>
      <Input { ...value } type={ getType() } />
      { 
        type === 'password' && 
        <Look src={ isBlank ? cannotSee : canSee } onClick={ handleBlank } draggable="false" />
      }
    </FormItem>
  )
}

export default FormInput
