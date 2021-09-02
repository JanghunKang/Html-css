import React from 'react';
import {Link}  from 'react-router-dom'
// import LoginImage from '../LoginImage';
import LoginImage2 from '../LoginImage2';
import '../../styles/Home.css'

const Home = () => {
    return (
        <div>
            <LoginImage2/>
            <h1 style={{"textAlign":'center', "font-size":'25px', "letterSpacing": '1.5px'}} >
                <Link to='/' style={{'text-decoration-line':'none','color':'black'}}>WELCOME!</Link></h1>
                <div className='block'>
                    <Link to='/Login' className='Login'>로그인 </Link>
                    <Link to='/Register' className='Register'>회원가입</Link>
                </div>
        </div>
    );
};

export default Home;