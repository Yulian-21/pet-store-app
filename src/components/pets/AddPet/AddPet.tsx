import React, { useState } from 'react'
import CustomInput from '../../Form/CustomInput'
import { BASE_API_URL } from '../../../config';
import { promisify } from '../../Api/FakeResponse';
import { Form } from '../../Form/Form';
import { Button } from '@mui/material';
import { IPet } from '../PetTypes/PetTypes';

const AddPet = () => {
 
    const handleSubmit = async (data: IPet) => {
        const result = await promisify(data);
        console.log(result);
        return petInitialValue;
    };

    const petInitialValue = {
        id: 1,
        name: "JohnDoe22",
        photoUrls: ["url1", "url2"],
        category: { id: 1, name: "JohnDoe"},
        tags: [{ id: 1, name: "string"}, {id: 2, name: "string2"}],
        status: "pending"
    }

    return (
        <Form
            onSubmit={handleSubmit}
            options={{ defaultValues: petInitialValue }}
        >
            {({ control }) => (
                <>
                    <CustomInput control={control} name="id" type="text" />
                    <CustomInput control={control} name="name" type="text"/> 
                    <CustomInput control={control} name="photoUrls" type="text"/>
                    <CustomInput control={control} name="category" type="text"/>
                    <CustomInput control={control} name="tags" type="text"/>
                    <CustomInput control={control} name="status" type="text"/>
                    <Button type="submit">Submit</Button>
                </>
            )}
        </Form>
  )
}

export default AddPet