import { TextField } from '@mui/material'
import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

type Props = {
    control: Control<FieldValues, any>;
    name: string;
    type?: string;
    id: string
    value?: string;
}

const CustomInput = (props: Props) => {

    const { control, name, type, id } = props

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onBlur, value, onChange, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
            }) => (
                <TextField
                    value={value}
                    type={type}
                    style={{ backgroundColor: 'rgba(255,255,255,0.5)', marginTop: '10px' }}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    required
                    id={id}
                    label={name}
                />
            )}
        />
    )
}

export default CustomInput