import { InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { selectProps } from '../../PetTypes/PetTypes';


const SelectCategory = (props: selectProps) => {
    const { control, name } = props
    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({
                    field: { onBlur, value, onChange, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                }) => (

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label="Category"
                        onChange={onChange}
                        sx={{ width: "200px", backgroundColor: "rgba(255,255,255,0.5)", marginTop: "10px" }}
                    >
                        <MenuItem value={"Cat"} onSelect={(value) => onChange(value)}>Cats</MenuItem>
                        <MenuItem value={"Dog"} onSelect={(value) => onChange(value)}>Dogs</MenuItem>
                        <MenuItem value={"Bird"} onSelect={(value) => onChange(value)}>Birds</MenuItem>
                        <MenuItem value={"string"} onSelect={(value) => onChange(value)}>Exotic</MenuItem>
                    </Select>

                )}
            />


        </>
    )
}

export default SelectCategory