import { Button, Input, InputLabel } from '@mui/material'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BASE_API_URL } from '../../../config';

const DeletePet = () => {
    const [id, setId] = useState('');

    //useEffect(() => { deletePet() }, [id])
    const deletePet = async () => {
        await axios.delete(BASE_API_URL + "/pet/" + id)
            .then((response) => { alert(response.status); })
            .catch(err => { alert(err.message) });
    }

    return (
        <>
            <InputLabel htmlFor='id' sx={{ fontWeight: 'bold' }}>Input deleting pet id</InputLabel>
            <Input name='petId' id="id" placeholder='Id' value={id} onChange={(id) => setId(id.target.value)} />
            <Button onClick={deletePet}>Delete</Button>
        </>
    )
}

export default DeletePet