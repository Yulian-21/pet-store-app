import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { BASE_API_URL } from '../../../config';
import CustomInput from '../../Form/CustomInput'
import { Form } from '../../Form/Form';
import { StyledForm } from '../AddPet/AddPet.styled';

type AddImageData = {
  id: number,
  additional: string,
  uploadImage: string
}

const AddImage = () => {

  const headers = { headers: { 'Accept': 'application/json', 'Content-Type': 'application/octet-stream' } }
  const updatePet = async (data: AddImageData) => {
    axios.post(BASE_API_URL + '/pet/' + data.id + '/uploadImage?additionalMetadata=' + data.additional,
      JSON.stringify({
        id: data.id,
        additional: data.additional,
        uploadImage: data.uploadImage
      }), headers)
      .then(response => { alert(response.status); })
      .catch(err => { alert(err.message); });
  }

  const initialValue: AddImageData = {
    id: 1,
    additional: 'image',
    uploadImage: ''
  }

  return (
    <StyledForm
      onSubmit={updatePet}
      options={{ defaultValues: initialValue }}>
      {({ control }) => (
        <>
          <CustomInput control={control} name="Id" id='id' />
          <CustomInput control={control} name="Additional" id='additional' />
          <CustomInput control={control}
            type="file"
            name='Image'
            id='image'
          />
          <Button type="submit">Submit</Button></>
      )}
    </StyledForm>
  )
}

export default AddImage