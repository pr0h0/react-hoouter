# React router hooks

React router module using react hooks

```
    import {Router, Route, Link, Redirect } from 'react-hoouter';

    function App(){
        return (
            <Router>
                <Route path="/" exact component={Home}/> // match only '/' path
                <Route path="/user" component={User}/>   // match any path starting with "/user*"
                <Route componet={NotFound}/>             // Match any route // renders always
                <Link to="/login">Login</Link>           // Change route when clicked to '/login'
                <Redirect to="/notFound"/>               // Force redirect to "/notFound" when rendered // use with caution
            </Router>
    )}
```
