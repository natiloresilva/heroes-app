import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../dc/DcScreen'
import { HeroScreen } from '../heroes/HeroScreen'
import { MarvelScreen } from '../marvel/MarvelScreen'
import { Navbar } from '../ui/NavBar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/heroe/:heroeId' component={HeroScreen} />
                    <Route exact path='/dc' component={DcScreen} />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
}
