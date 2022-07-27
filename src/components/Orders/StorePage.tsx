import React, {FC, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const StorePage: FC = () => {
    const [orderId, setOrderId] = useState('')
    const navigation = useNavigate()
  return (
    <div>
        <label htmlFor='id'>Id of Order</label>
        <input type="text" value={orderId} id="id" onChange={(changing) => setOrderId(changing.target.value)} placeholder="Your Id"/>
        <button onClick={() => navigation('/orders/' + orderId)}>Show</button>
    </div>
  )
}

export default StorePage