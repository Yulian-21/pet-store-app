import React, {FC, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const PetsPage: FC = () => {
    const [petId, setPetId] = useState('')
    const [petTag, setPetTag] = useState('')  

    const navigation = useNavigate()
  return (
    <div>
        <div>
          <label htmlFor="petId">Id of pet that interests you</label>
        <input type="text" value={petId} id="petId" onChange={(changing) => setPetId(changing.target.value)} placeholder="Pet Id"/>
        <button onClick={() => navigation('/pets/' + petId)}>Show</button>
        </div>
        <div>
        <label htmlFor="petTag">Interests you Tag</label>
        <input type="text" value={petTag} id="petTag" onChange={(changing) => setPetTag(changing.target.value)} placeholder="Tag"/>
        <button onClick={() => navigation('/pets/tag/' + petTag)}>Show</button>
        </div>
    </div>
  )
}

export default PetsPage