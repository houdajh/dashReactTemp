import { compressToEncodedURIComponent } from 'lz-string'
import React from 'react'
import { db } from '../firebase/firebase'

class Customers extends React.Component{
   
        state = {
            users:null
        }
        
         
        

        componentDidMount(){
            console.log("mounted")
            db.collection('users').get().then(snapshot=>{
                const users =[]
                var size = snapshot.size
                snapshot.forEach(doc=>{
                    const data = doc.data()
                    users.push(data)
                })
                this.setState({users : users})
                console.log(snapshot)
                console.log(size)
                

            })
            
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


    