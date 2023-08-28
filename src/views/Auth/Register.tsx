import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormikForm from '../../components/form/FormikForm';
import Card from '../../components/ui/Card';
import Header from '../../components/ui/Header';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { LoginData, register } from '../../store/thunks/auth/authThunks';
import Toast from '../../components/ui/Toast';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth);

  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const fields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  const handleSubmit = async (values: Record<string, string>) => {
    const loginData: LoginData = {
      email: values.email,
      password: values.password,
    };

    try {
      await dispatch(register(loginData));
      setIsToastVisible(true);
      setToastMessage('Registration successful');
      setToastType('success');
      navigate('/signin');
    } catch (error) {
      setIsToastVisible(true);
      setToastMessage('Error registering user');
      setToastType('error');
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <Card className="max-w-[400px] ">
        <div>
          <Header className="mb-3">Register Now!</Header>
          <FormikForm fields={fields} onSubmit={handleSubmit} />
        </div>
      </Card>
      {isToastVisible && (
        <Toast message={toastMessage} type={toastType} onClose={() => setIsToastVisible(false)} />
      )}
    </div>
  );
};

export default Register;
