import type { CountryField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form'

import React, { useState, useEffect } from 'react'
import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import { Error } from '../Error'
import { Width } from '../Width'
import classes from './index.module.scss'
import { countryOptions } from './options'

export const Country: React.FC<
  {
    control: Control<FieldValues, any>
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
  } & CountryField
> = ({ name, control, errors, label, required, width }) => {
  // Use client-side only rendering to avoid hydration issues
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Width width={width}>
      <div className={classes.select}>
        <label className={classes.label} htmlFor={name}>
          {label}
        </label>
        <Controller
          control={control}
          defaultValue=""
          name={name}
          render={({ field: { onChange, value } }) => (
            <>
              {/* Only render the select component on the client to avoid hydration mismatches */}
              {isClient ? (
                <ReactSelect
                  className={classes.reactSelect}
                  classNamePrefix="rs"
                  inputId={name}
                  instanceId={name}
                  onChange={(val) => onChange(val ? val.value : '')}
                  options={countryOptions}
                  value={countryOptions.find((c) => c.value === value)}
                />
              ) : (
                /* Render a placeholder during SSR that will be replaced on client */
                <div className={classes.reactSelect}>
                  <div className="rs__control">
                    <div className="rs__value-container">
                      <div className="rs__placeholder">{value || ' '}</div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          rules={{ required }}
        />
        {required && errors[name] && <Error />}
      </div>
    </Width>
  )
}
