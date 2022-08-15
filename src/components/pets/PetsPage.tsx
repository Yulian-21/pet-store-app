import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Status } from './PetTypes/PetTypes'
import AddPet from "./AddPet/AddPet"
import UpdatePet from "./UpdatePet/UpdatePet"
import UpdatePetById from './UpdatePetById/UpdatePetById'
import DeletePet from './DeletePet/DeletePet'
import AddImage from './AddImage/AddImage';

const PetsPage: FC = () => {
  const [petId, setPetId] = useState('')
  const [petTag, setPetTag] = useState('')
  const [status, setStatus] = useState('')

  const navigation = useNavigate()
  return (
    <div>
      <div>
        <label htmlFor="petId">Search By Id</label>
        <input type="text" value={petId} id="petId" onChange={(changing) => setPetId(changing.target.value)} placeholder="Pet Id" />
        <button onClick={() => navigation('/pets/' + petId)}>Show</button>
      </div>
      <div>
        <label htmlFor="petTag">Search by Tag</label>
        <input type="text" value={petTag} id="petTag" onChange={(changing) => setPetTag(changing.target.value)} placeholder="Tag" />
        <button onClick={() => navigation('/pets/byTag/' + petTag)}>Show</button>
      </div>
      <div>
        <label htmlFor="status">Search By Status</label>
        <select id="status" value={status} onChange={selectedStatus => setStatus(selectedStatus.target.value)}>
          <option>-----</option>
          <option value={Status.Available}>Available</option>
          <option value={Status.Pending}>Pending</option>
          <option value={Status.Sold}>Sold</option>
        </select>
        <button onClick={() => navigation('/pets/byStatus/' + status)}>Search</button>
      </div>
      <div>
        <AddPet />
      </div>
      <div>
        <UpdatePet />
      </div>
      <div>
        <UpdatePetById />
      </div>
      <div>
        <DeletePet />
      </div>
      <div>
        <AddImage />
      </div>
    </div>
  )
}

export default PetsPage