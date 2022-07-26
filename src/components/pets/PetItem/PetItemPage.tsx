import React, {FC, useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import { IPet, PetItemPageParams } from '../PetTypes/PetTypes'


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
      
        <div>
          <ul>
            {
              pet?.photoUrls?.map((image, index) => (
                <li key={index}> 
                <img src={image}/>
                </li>
              ))
            }
          </ul>
          <div>{pet?.id}. {pet?.name} {pet?.category?.name} {pet?.status}</div>

          <h3>Tags: </h3>
          
           <ul>
            {
                pet?.tags?.map(tag => (
                  <li key={tag?.id}> {tag?.name}</li>))
            }
           </ul>
        </div>
        <button onClick={() => history('/pets')}> Return</button>
    </div>
  )
}

export default PetItemPage