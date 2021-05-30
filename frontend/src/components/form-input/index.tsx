import React, { useState, KeyboardEvent } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { FormItem, Label, Input, Look } from './index.style'
import canSee from 'images/can-see.svg'
import cannotSee from 'images/cannot-see.svg'

interface FormInput {
  label: string;
  value: UseFormRegisterReturn;
  type?: 'text' | 'password' | 'email' | 'number';
  onKeyUp?: (event: KeyboardEvent) => void;
}

const FormInput = ({ label, value, type, onKeyUp }: FormInput) => {
  const [ isBlank, setIsBlank ] = useState(true)
  const handleBlank = () => setIsBlank(prev => !prev)
  const getType = () => (type === 'password' && !isBlank) ? 'text' : type || 'text'

  return (
    <FormItem>
      <Label>{ label }</Label>
      <Input
        { ...value }
        type={ getType() }
        autoComplete="off"
        onKeyUp={ onKeyUp }
      />

      { type === 'password' && <Look src={ isBlank ? cannotSee : canSee } onClick={ handleBlank } draggable="false" />}
    </FormItem>
  )
}

export default FormInput