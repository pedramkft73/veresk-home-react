import { Outlet } from 'react-router-dom';
import HeaderStyle2 from '../Components/Header/HeaderStyle2';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='main-page-area'>
            <HeaderStyle2></HeaderStyle2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;