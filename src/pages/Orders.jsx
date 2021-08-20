import { compressToEncodedURIComponent } from 'lz-string'
import React from 'react'
import { db } from '../firebase/firebase'

class Orders extends React.Component{
   
        state = {
            orders:null
        }
        
         
        

        componentDidMount(){
            db.collection('orders').get().then(snapshot=>{
                const orders =[]
                snapshot.forEach(doc=>{
                    const data = doc.data()
                    orders.push(data)
                })

                this.setState({orders : orders})
               // console.log(snapshot)
               // console.log(orders)
                let first = Object.keys(orders[0])
                //console.log(orders[0][first].address)
            }).then(
                )
            .catch(error=>console.log(error))
        }
       
        render(){
            return(
                <div className ="Orders">
                    <thead class="thead-dark">
                    <h1>Orders  List</h1>
                    <tr>
                        <th>Title of product</th>
                        <th>Name of Customer</th>
                        <th>adress of Customer</th>
                        <th>email of Customer</th>
                        <th>phone number</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    
                    {this.state.orders && 
                    this.state.orders.map((index) =>{
                        
                    console.log(index)
                        return(
                            <tr>
                                <td>{ index[Object.keys(index)].title} </td>
                                <td>{ index[Object.keys(index)].name} </td>
                                <td>{ index[Object.keys(index)].address}</td>
                                <td> { index[Object.keys(index)].email} </td>
                                <td> { index[Object.keys(index)].phone} </td>
                                <td> { index[Object.keys(index)].counter} </td>
                            </tr>
                        )
                    })
                    }
                </div>
            )
           
    }
}
    export default Orders


    