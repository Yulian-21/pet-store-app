import { Grid } from '@mui/material'
import React from 'react'
import { IPet } from '../../PetTypes/PetTypes'
import PetCard from './PetCard/PetCard'

type Pets = {
    pets: IPet[]
}

const PetList = (props: Pets) => {

    const { pets } = props
    return (
        <Grid container spacing={1} sx={{ width: '100vm', backgroundColor: 'black' }}>
            {pets.map((pet) => (
                <PetCard key={pet.id} {...pet} />
            ))}

        </Grid>
    )
}

export default PetList