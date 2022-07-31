import React from 'react';
import { Button } from '@mui/material';

import { promisify } from '../../Api/FakeResponse';
import { IPet, ITag } from '../PetTypes/PetTypes';
import CustomInput from '../../Form/CustomInput';
import { Form } from '../../Form/Form';
import TagsGenerator from './TagsGenerator/TagsGenerator';
import SelectCategory from './SelectCategory/SelectCategory';
import { StyledForm } from './AddPet.styled';

type handleData = {
    id: number,
    name: string,
    photoUrls: string,
    category: string,
    status: string,
    tags: ITag[]
}

const AddPet = () => {

    const handleSubmit = async (data: handleData) => {

        const sendingData: IPet = {
            id: data.id,
            name: data.name,
            photoUrls: data.photoUrls.split(","),
            category: {
                id: undefined,
                name: data.category
            },
            status: data.status,
            tags: data.tags
        }

        const result = await promisify(sendingData);
        console.log(result);
        return petInitialValue;
    };



    const petInitialValue = {
        id: 1,
        name: "Barsik",
        photoUrls: ["url1", "url2"],
        category: { name: "Cat" },
        tags: [{ id: 1, name: "hairy" },
        { id: 2, name: "red" },
        { id: 3, name: "curly" },
        { id: 4, name: "sweet" },
        { id: 5, name: "smart" },
        { id: 6, name: "big" },
        { id: 7, name: "fat" },
        { id: 8, name: "tall" },
        { id: 9, name: "beautiful" }],
        status: "pending"
    }

    //onUpdate={updateData}
    return (
        <StyledForm
            onSubmit={handleSubmit}
            options={{ defaultValues: petInitialValue }}
        >
            {({ control }) => (
                <>
                    <CustomInput control={control} name="id" id="id" type="number" />
                    <CustomInput control={control} name="name" id="name" type="text" />
                    <CustomInput control={control} name="photoUrls" id="photoUrls" type="text" />
                    <SelectCategory control={control} name="category" />
                    <CustomInput control={control} name="status" id="status" type="text" />
                    <TagsGenerator control={control} name="tags" id="tags" />
                    <Button type="submit" sx={{ color: "gold" }}>Submit</Button>
                </>
            )}
        </StyledForm>
    )
}

export default AddPet;