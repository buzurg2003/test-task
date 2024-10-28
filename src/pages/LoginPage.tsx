import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
    username: string;
    password: string;
}

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data: LoginForm) => {
        if (data.username === 'admin' && data.password === 'password') {
            dispatch(login({ username: data.username }));
            navigate('/home');
        } else {
            alert("Неверный логин или пароль");
        }
    };

    return (
        <div className="container" style={{ maxWidth: '400px', marginTop: '50px' }}>
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        id="username"
                        {...register('username', { required: 'Username is required' })}
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
