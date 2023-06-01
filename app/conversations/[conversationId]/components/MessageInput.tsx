import React, { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface Props {
  id: string
  register: UseFormRegister<FieldValues>
  placeholder?: string
  type?: string
  required?: boolean
}

const MessageInput: FC<Props> = ({
  id,
  placeholder,
  type,
  required,
  register,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
      />
    </div>
  )
}

export default MessageInput
