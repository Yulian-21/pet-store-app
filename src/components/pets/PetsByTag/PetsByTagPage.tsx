import React, {FC, useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import { IPet } from '../PetTypes/PetTypes'



const PetsByTagPage = () => {

const [pets, setPets] = useState<IPet[]>([])
const { id } = useParams<PetItemPageParams>()
  const history = useNavigate()

  return (
    <div>PetsByTagPage</div>
  )
}

export default PetsByTagPage