import React, {FC, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import PetItemPage from './PetItemPage'

const PetsPage = () => {
    const [petId, setPetId] = useState('')
    const navigation = useNavigate()
  return (
    <div>
        <input type="text" value={petId} onChange={(changing) => setPetId(changing.target.value)}/>
        <button onClick={() => navigation('/pets/' + petId)}>Show</button>
    </div>
  )
}

export default PetsPage