import { MenuItem, Select } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { selectProps } from '../../PetTypes/PetTypes'

const SelectStatus = (props: selectProps) => {
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
                        <MenuItem value={"Available"} onSelect={(value) => onChange(value)}>Available</MenuItem>
                        <MenuItem value={"Pending"} onSelect={(value) => onChange(value)}>Pending</MenuItem>
                        <MenuItem value={"Sold"} onSelect={(value) => onChange(value)}>Sold</MenuItem>
                    </Select>

                )}
            />


        </>
    )
}

export default SelectStatus