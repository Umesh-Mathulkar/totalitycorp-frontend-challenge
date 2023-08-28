import React from 'react'

import Footer from "./Footer";
import Navbar from "./Navbar";
import { useAppDispatch } from '../../store/hook';
import { fetchUserDetails } from '../../store/thunks/auth/authThunks';

const Layout = ({ children }: { children: React.ReactNode }) => {

    const dispatch = useAppDispatch()

    React.useEffect(()=>{
        dispatch(fetchUserDetails());
      },[])

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;