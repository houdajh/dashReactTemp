import { compressToEncodedURIComponent } from 'lz-string'
import React from 'react'
import { db } from '../firebase/firebase'

class Customers extends React.Component{
   
        state = {
            users:null
        }
        
         
        

        componentDidMount(){
            db.collection('users').get().then(snapshot=>{
                const users =[]
                snapshot.forEach(doc=>{
                    const data = doc.data()
                    users.push(data)
                })
                this.setState({users : users})

            })
            .catch(error=>console.log(error))
        }
        
        render(){
            return(
                <div className ="Customers">
                    <thead class="thead-dark">
                    <h1>Customers  List</h1>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>email</th>
                        <th>phone number</th>
                        <th>address</th>
                    </tr>
                    </thead>
                    {this.state.users && 
                    this.state.users.map(users =>{
                        return(
                            <tr>
                                <td>{users.first_name}</td>
                                <td>{users.last_name}</td>
                                <td>{users.email}</td>
                                <td>{users.phone_number}</td>
                                <td>{users.address}</td>
                            </tr>
                        )
                    })
                    }
                </div>
            )
           
    }
}
    export default Customers


    