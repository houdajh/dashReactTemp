import React from 'react'
import { db } from '../firebase/firebase'

class Products extends React.Component{
   
        state = {
            products:null
        }
        
         
        

        componentDidMount(){
            console.log("mounted")
            db.collection('Products').get().then(snapshot=>{
                const products =[]
                snapshot.forEach(doc=>{
                    const data = doc.data()
                    products.push(data)
                })
                this.setState({products : products})
                console.log(snapshot)
                

            })
            .catch(error=>console.log(error))
        }
        
        render(){
            return(
                <div className ="Products">
                    <thead class="thead-dark">
                    <h1>Products List</h1>
                    <tr>
                        <th>Product id</th>
                        <th>price</th>
                        <th>type</th>
                        <th>quantity</th>
                        
                    </tr>
                    </thead>
                    {this.state.products && 
                    this.state.products.map(products =>{
                        return(
                            <tr>
                                <td>{products.id}</td>
                                <td>{products.price}</td>
                                <td>{products.type}</td>
                                <td>{products.quantity}</td>
                                
                            </tr>
                        )
                    })
                    }
                </div>
            )
           
    }
}
    export default Products


    