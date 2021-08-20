import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Categories from '../pages/Categories'
import SignIn from '../SignIn'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' exact  component={Customers}/>
            <Route path='/products' exact component={Products}/>
            <Route path='/orders' exact component={Orders}/>
            <Route path='/categories'exact  component={Categories}/>
            <Route path='/signIn'exact  component={SignIn}/>
        </Switch>
    )
}

export default Routes
