import React, { useState } from 'react'
import { FormItem, Label, Input, Look } from './style'
import canSee from '../../assets/images/can-see.svg'
import cannotSee from '../../assets/images/cannot-see.svg'

interface FormInput {
  label: string;
  type?: 'text' | 'password' | 'email' | 'number';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ label, type, onChange }: FormInput) => {
  const [ isBlank, setIsBlank ] = useState(true)
  const handleBlank = () => setIsBlank(prev => !prev)
  const getType = () => (type === 'password' && !isBlank) ? 'text' : type || 'text'

  const lookRender = type === 'password' ? <Look src={ isBlank ? cannotSee : canSee } onClick={ handleBlank } draggable="false" /> : null

  return (
    <FormItem>
      <Label>{ label }</Label>
      <Input onChange={ onChange } type={ getType() } />
      { lookRender }
    </FormItem>
  )
}

export default FormInput
