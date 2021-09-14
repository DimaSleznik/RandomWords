import React from 'react';
import { List, LoginForm, Navbar, WordMenu, Options, ChangeList } from '../components';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { path } from '../constans';
const history = createBrowserHistory();
export const Routing = () => {

    return (
        <Router history={history}>
            <Navbar></Navbar>
            <Switch>
                <Route exact path='/'>
                    <WordMenu></WordMenu>
                </Route>
                <Route path={path.list}>
                    <List></List>
                </Route>
                <Route path={path.changeList}>
                    <ChangeList></ChangeList>
                </Route>
                <Route path={path.createList}>
                    <LoginForm></LoginForm>
                </Route>
                <Route path={path.options}>
                    <Options></Options>
                </Route>
            </Switch>



        </Router>



    )
}