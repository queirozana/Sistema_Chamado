import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Dashboard from '../Dashboard';

export default function Routes(){
    return (
    <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact  path="/dashboard" component={Dashboard} />
    </Switch>
    )
}