import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { IPet, PetByStatusParams } from '../PetTypes/PetTypes';

const PetByStatus: FC = () => {
    const [pets, setPets] = useState<IPet[]>([])
    const { status } = useParams<PetByStatusParams>()
    const history = useNavigate()

    useEffect(() => {
        fetchPets();
    }, [status])


    const fetchPets = async () => {
        try {
            const response = await axios.get<IPet[]>('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=' + status)
            setPets(response.data);
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            {
                pets.map(pet => (
                    <div>
                        <h1> The page of {pet?.name} </h1>
                        <div>
                            <ul>
                                {
                                    pet?.photoUrls?.map((image, index) => (
                                        <li key={index}>
                                            <img src={image} alt={pet.name} />
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
                    </div>
                ))
            }
            <button onClick={() => history('/pets')}> Return</button>
        </div>
    )
}

export default PetByStatus