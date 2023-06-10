import { Outlet } from 'react-router-dom'
import PageNotFound from '../components/pagenotfound/PageNotFound';
import { TokenValidation } from './TokenValidation';


const PrivateRoutesAdmin = () => {
    const auth = TokenValidation();
    if (auth.admin && auth.token) {
        return <Outlet />;
    } else {
        return <PageNotFound />
    }
};

export default PrivateRoutesAdmin;