import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EntityPage = () => {
    const { id } = useParams<{ id: string }>();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("Updated data:", data);
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Entity: {id}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded shadow">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        id="name"
                        {...register('name', { required: true })}
                        className="form-control"
                        placeholder="Enter name"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default EntityPage;
