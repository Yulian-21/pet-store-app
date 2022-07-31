import React from 'react'
import { ICategory } from '../../PetTypes/PetTypes'
import CustomInput from '../../../Form/CustomInput';
import { Control, FieldValues } from 'react-hook-form';

type addCategoryProps = {
control: Control<FieldValues, any>
name: string
//onUpdate: (data :ICategory) => void
}

const AddCategory = (props : addCategoryProps) => {

    const {control} = props

  return (
    <>
    <CustomInput  control={control} name="name" id="categoryName" type="string"/>
    </>
  )
}

export default AddCategory