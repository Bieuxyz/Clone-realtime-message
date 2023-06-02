'use client'

import { FC } from 'react'
import ReactSelect, { SingleValue } from 'react-select'

interface Props {
  label: string
  options: Record<string, any>[]
  onChange: (value: SingleValue<Record<string, any>>) => void
  disabled?: boolean
  value?: Record<string, any>
}

const Select: FC<Props> = ({ label, options, onChange, disabled, value }) => {
  return (
    <div className="z-[100]">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          options={options}
          isMulti={true}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999,
            }),
          }}
          classNames={{
            control: () => 'text-sm',
          }}
        />
      </div>
    </div>
  )
}

export default Select
