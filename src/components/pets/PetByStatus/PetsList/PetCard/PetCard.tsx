import { Box, CardContent, CardMedia, Container, Grid, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IPet } from '../../../PetTypes/PetTypes'
import PetCarousel from './Carousel/PetCarousel'
import { StyledCard, StyledMedia } from './PetCard.styled'
// id?: number;
//   name: string;
//   category: ICategory;
//   photoUrls: Array<string>;
//   tags: Array<ITag>;
//   status: string;

const PetCard = (props: IPet) => {
    const { name, category, photoUrls, tags, status } = props
    const title: string = `Category: ${category?.name}, Status: ${status}`
    debugger;
    return (
        <Grid item xs={12} md={4} height={'200px'} width={'100px'} sx={{ bgColor: '#fff', color: 'white' }}>
            <StyledCard>
                <PetCarousel photoUrls={photoUrls} />
                <CardContent>
                    <Typography variant="h6">
                        {name}
                    </Typography>
                    <Typography variant="body1">
                        {title}
                    </Typography>
                    Tags:
                    {tags.map((tag) => (<Typography variant="body2">{tag.name} </Typography>))}
                </CardContent>
            </StyledCard>

        </Grid>
    )
}

export default PetCard