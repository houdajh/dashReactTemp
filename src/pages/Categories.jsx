import { compressToEncodedURIComponent } from 'lz-string'
import React from 'react'
import { db } from '../firebase/firebase'

class Categories extends React.Component{
   
        state = {
            categorie:null
        }
        
         
        

        componentDidMount(){
            db.collection('categorie').get().then(snapshot=>{
                const categorie =[]
                snapshot.forEach(doc=>{
                    const data = doc.data()
                    categorie.push(data)
                })
                this.setState({categorie : categorie})

            })
            .catch(error=>console.log(error))
        }
        
        render(){
            return(
                <div className ="Categories">
                    <thead class="thead-dark">
                    <h1>Categories  List</h1>
                    <tr>
                        <th>name of category</th>
                        <th>background</th>
                        
                    </tr>
                    </thead>
                    {this.state.categorie && 
                    this.state.categorie.map(categorie =>{
                        return(
                            <tr>
                                <td>{categorie.titre}</td>
                                <td> <img src={ categorie.image } alt="Product Pic" height="40px" width="40px" /></td>
                                
                                
                            </tr>
                        )
                    })
                    }
                </div>
            )
           
    }
}
    export default Categories


    