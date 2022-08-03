import React from 'react'
import CustomInput from '../../Form/CustomInput'
import { StyledForm } from './UpdatePet.styled'
import { BASE_API_URL } from '../../../config'
import axios from 'axios'
import { handleData, IPet } from '../PetTypes/PetTypes';
import { Button } from '@mui/material'
import TagsGenerator from '../PetsComponents/TagsGenerator/TagsGenerator'
import SelectCategory from '../PetsComponents/SelectCategory/SelectCategory'
import SelectStatus from '../PetsComponents/SelectStatus/SelectStatus'

const UpdatePet = () => {


    const updatePet = (async (data: handleData) => {
        axios.put(BASE_API_URL + '/pet', {
            id: data.id,
            name: data.name,
            photoUrls: data.photoUrls.split(","),
            category: {
                id: undefined,
                name: data.category
            },
            status: data.status,
            tags: data.tags
        })
            .then(response => { alert(response.status); })
            .catch(err => { alert(err.message); });
    })


    const petInitialValue = {
        id: 1,
        name: "Barsik",
        photoUrls: ["url1", "url2"],
        category: { name: "Cat" },
        tags: [{ id: 1, name: "hairy" },
        { id: 2, name: "red" },
        { id: 3, name: "curly" },
        { id: 4, name: "sweet" },
        { id: 5, name: "smart" }],
        status: "pending"
    }

    return (
        <StyledForm
            onSubmit={updatePet}
            options={{ defaultValues: petInitialValue }}
        >
            {({ control }) => (
                <>
                    <CustomInput control={control} name="id" id="id" type="number" />
                    <CustomInput control={control} name="name" id="name" type="text" />
                    <CustomInput control={control} name="photoUrls" id="photoUrls" type="text" />
                    <SelectCategory control={control} name="category" />
                    <SelectStatus control={control} name="status" />
                    <TagsGenerator control={control} name="tags" id="tags" />
                    <Button type="submit" sx={{ color: "gold" }}>Submit</Button>
                </>
            )}
        </StyledForm>
    )
}

export default UpdatePet