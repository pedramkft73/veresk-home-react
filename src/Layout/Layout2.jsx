import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer/Footer';

const Layout2 = () => {
    return (
        <div className='main-page-area2'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout2;