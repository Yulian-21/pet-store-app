import axios from 'axios'
import React, {FC, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IOrder, IPet } from '../../../types/types'

type PetItemPageParams = {
    id: string
  }

const OrderItem: FC = () => {
    const [order, setOrder] = useState<IOrder>()
    const { id } = useParams<PetItemPageParams>()
    const history = useNavigate()
  
    useEffect(() => {
      fetchOrder();
    }, [])
  
  
    const fetchOrder = async () => {
      try{
      const orderResponse = await axios.get<IOrder>('https://petstore3.swagger.io/api/v3/store/order/' + id)
      setOrder(orderResponse.data);
      } catch(err) {
        alert(err)
      }
    }

   
  
    return (
      <div>
        <h1> The data page of order №{order?.id} </h1>
         <div>
            <div>Pet Id: {order?.petId}, quantity: {order?.quantity}</div>
            <div>Order Status: {order?.status} Ship Date: {order?.shipDate}</div>
            Completed: <input type="checkbox" checked={order?.complete} />
         </div>
          <button onClick={() => history('/orders')}> Return</button>
      </div>
  )
}

export default OrderItem