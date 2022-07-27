import axios from 'axios'
import React, {FC, useCallback, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IPet } from '../../Pets/PetTypes/PetTypes'
import { IOrder } from '../OrderType/OrderType'


type OrderItemPageParams = {
    id: string
  }

const OrderItem: FC = () => {
    const [order, setOrder] = useState<IOrder>()
    const [pet, setPet] = useState<IPet>()

    const { id } = useParams<OrderItemPageParams>()
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
    
    const getData  = useCallback(async () => {
      const orderedPet = await axios.get<IPet>('https://petstore3.swagger.io/api/v3/pet/' + order?.petId)
       setPet(orderedPet.data);
    }, [order])

   useEffect(() => {
    getData();
   }, [order])
 
    return (
      <div>
        <h1> The data page of order №{order?.id} name {pet?.name}  </h1>
         <div>
            <div>Pet Id: {order?.petId}, quantity: {order?.quantity}</div>
            <div>Order Status: {order?.status} Ship Date: {order?.shipDate}</div>
            <div>
              Completed: <input type="checkbox" checked={order?.complete} />
              </div>
         </div>
         
          <button onClick={() => history('/orders')}> Return</button>
      </div>
  )
}

export default OrderItem