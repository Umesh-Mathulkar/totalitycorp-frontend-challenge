import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import FormikForm from "../../components/form/FormikForm"
import Card from "../../components/ui/Card"
import Header from "../../components/ui/Header";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { LoginData, fetchUserDetails, login } from "../../store/thunks/auth/authThunks";


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth);
    console.log(user)
    const fields = [
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
    ];

    const handleSubmit = async (values: Record<string, string>) => {
        const loginData: LoginData = {
          email: values.email,
          password: values.password,
        };
    
        const action = await dispatch(login(loginData));
        if (action.meta.requestStatus === "fulfilled") {
            await dispatch(fetchUserDetails());
            navigate('/')
        }
      };
    
   

    return (
        <div className="flex justify-center h-screen items-center">
            <Card className="max-w-[400px] ">
                <div>
                    <Header className="mb-3">Sign-In</Header>
                    <FormikForm fields={fields} onSubmit={handleSubmit} />
                    <Link to={'/register'} >dont gave an account? Create One</Link>
                </div>
            </Card>
        </div>
    )
}

export default Login