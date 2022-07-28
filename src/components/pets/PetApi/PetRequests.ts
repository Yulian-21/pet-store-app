import { BASE_API_URL } from '../../../config';
import { IPet } from '../PetTypes/PetTypes';
import axios from 'axios';

const ADD_PET_URL = `${BASE_API_URL}/pet`

export const addPetRequest = async (pet: IPet) => {
    await axios.post<IPet>(ADD_PET_URL, pet
    ).then(response => response.data)
        .catch(err => { alert(err.message) })
}
