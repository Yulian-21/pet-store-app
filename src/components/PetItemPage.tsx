import React, {FC, useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import { IPet } from '../types/types'

type PetItemPageParams = {
  id: string
}

const PetItemPage: FC = () => {

  const [pet, setPet] = useState<IPet>()
  const { id } = useParams<PetItemPageParams>()
  const history = useNavigate()

  useEffect(() => {
    fetchPet();
  }, [])


  const fetchPet = async () => {
    try{
    const response = await axios.get<IPet>('https://petstore3.swagger.io/api/v3/pet/' + id)
    setPet(response.data);
    } catch(err) {
      alert(err)
    }
  }
 

  return (
    <div>
      <h1> The page of {pet?.name} </h1>
      <button onClick={() => history('/pets')}> Return</button>
        <div>
          <ul>
            {
              pet?.photoUrls.map(image => (
                <li><img src={image}></img></li>
              ))
            }
          </ul>
          {pet?.id}. {pet?.name} {pet?.status}
           <ul>
            {
              pet?.tags.map(tag => (
                <li key={tag.id}>Tags: {tag.name}</li>
              ))
            }
           </ul>
        </div>
    </div>
  )
}

export default PetItemPage