import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function RouterWrapper({
    component: Component,
    isPrivate,
    ...rest //spread operator
}) {
    
    const { signed } = useContext(AuthContext);
    const loading = false;

    if(loading){
        return <div></div>;
    }

    if (!signed && isPrivate){
        return <Redirect to="/" />
    }

    if (signed && !isPrivate){
        return <Redirect to="/dashboard" />;
    }


    return(
        <Route
            {...rest}
            render={ props => (
                <Component {...props}/>
            )}
        />
    )
}