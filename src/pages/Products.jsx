import React from 'react'
import { db } from '../firebase/firebase'
import { compressToEncodedURIComponent } from 'lz-string'
import Table from '../components/table/Table'

class Products extends React.Component{
   
    state = {
        produits:null
    }
    
     
    

    componentDidMount(){
        db.collection('produits').get().then(snapshot=>{
            const produits =[]
            snapshot.forEach(doc=>{
                const data = doc.data()
                produits.push(data)
            })
            this.setState({produits : produits})

        })
        .catch(error=>console.log(error))
    }
    
    render(){
        return(
            <div className ="Products">
                <thead class="thead-dark">
                <h1 >Products List</h1>
                <tr>
                    <th>title</th>
                    <th>price</th>
                    <th>old price</th>
                    <th>picture</th>
                    <th>likes</th>
                    <th>description</th>
                </tr>
                </thead>
                {this.state.produits && 
                this.state.produits.map(produits =>{
                    return(
                        <tr>
                            <td>{produits.titre}</td>
                            <td>{produits.prix}</td>
                            <td>{produits.oldPrix}</td>
                            <td> <img src={ produits.images[0] } alt="Product Pic" height="40px" width="40px" /></td>
                            
                            <td>{produits.countlikes}</td>
                            <td>{produits.description}</td>
                        </tr>
                    )
                })
                }
            </div>
        )
       
}
}


export default Products
