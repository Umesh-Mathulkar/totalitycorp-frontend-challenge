import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import Button from '../ui/Button';
import { fetchUserDetails, logout } from '../../store/thunks/auth/authThunks';
import { FaSignOutAlt, FaHome, FaShoppingCart } from 'react-icons/fa'; // Import the necessary icons

const routes = ['Home', 'Cart'];

const NavList = ({ target }: { target: string }) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth);
  const user = userData.loginResponse?.email;

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    dispatch(logout);
    window.location.reload();
  };

  const LoginOrUser = () => {
    if (user) {
      return (
        <div className='flex items-center'>
          <p className='text-white mr-2'>Hi {user}</p>
          <Button color='amber' handleSubmit={handleLogout}>
            <FaSignOutAlt />
          </Button>
        </div>
      );
    } else {
      return (
        <Link to='/signin' className='ml-auto'>
          <button className='border bg-amber-600 px-2 text-amber-200'>
            Sign In
          </button>
        </Link>
      );
    }
  };

  return (
    <>
      {routes.map((item, index) => (
        <Link
          key={index}
          className={`text-[#008B8B] hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${
            target !== 'web' && 'block'
          }`}
          to={item === 'Home' ? '/' : item}
        >
          <div className='flex items-center gap-2'>
            {/* Use icons based on route */}
            {item === 'Home' ? <FaHome className='mr-1' /> : <FaShoppingCart className='mr-1' />}
            {item}
          </div>
        </Link>
      ))}

      <LoginOrUser />
    </>
  );
};

export default NavList;
