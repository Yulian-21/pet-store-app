import { TextField } from '@mui/material'
import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

type Props = { 
    control: Control<FieldValues, any>;
    name: string;
    type: string;
}

const CustomInput = (props : Props) => {

    const {control, name, type} = props

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
            }) => (
                <TextField
                    value={value}
                    type={type}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    required
                    id="outlined-required"
                    label={name}
                />
            )}
        />
    )
}

export default CustomInput