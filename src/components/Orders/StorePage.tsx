import React, {FC, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const StorePage: FC = () => {
    const [orderId, setOrderId] = useState('')
    const navigation = useNavigate()
  return (
    <div>
        <input type="text" value={orderId} onChange={(changing) => setOrderId(changing.target.value)}/>
        <button onClick={() => navigation('/orders/' + orderId)}>Show</button>
    </div>
  )
}

export default StorePage