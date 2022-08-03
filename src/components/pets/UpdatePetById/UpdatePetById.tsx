import { Button } from '@mui/material'
import React from 'react'
import CustomInput from '../../Form/CustomInput'
import { StyledForm } from './UpdatePetById.styled'
import { partialData } from '../PetTypes/PetTypes';
import axios from 'axios';
import { BASE_API_URL } from '../../../config';
import SelectStatus from '../PetsComponents/SelectStatus/SelectStatus';

const UpdatePetById = () => {

    const updatePet = (async (data: partialData) => {
        const UPDATE_PET_URL = BASE_API_URL + '/pet/' + data.id + "?name=" + data.name + "&status=" + data.status;
        axios.post(UPDATE_PET_URL)
            .then(response => { alert(response.status); })
            .catch(err => { alert(err.message); });
    })

    const updatePetValues = {
        id: 1,
        name: "Borisjhonsonuk",
        status: "pending"
    }

    return (
        <StyledForm
            onSubmit={updatePet}
            options={{ defaultValues: updatePetValues }}
        >
            {({ control }) => (
                <>
                    <CustomInput control={control} name="id" id="id" type="number" />
                    <CustomInput control={control} name="name" id="name" type="text" />
                    <SelectStatus control={control} name="status" />
                    <Button type="submit" sx={{ color: "gold" }}>Submit</Button>
                </>
            )}
        </StyledForm>
    )
}

export default UpdatePetById