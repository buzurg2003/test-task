import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [characters, setCharacters] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
                setCharacters(response.data.results);
                setTotalPages(Math.ceil(response.data.count / 10)); // 10 - количество элементов на странице
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [page]);

    return (
        <div className="container">
            <h1 className="text-center my-4">Characters</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {characters.map((char) => (
                    <tr key={char.name}>
                        <td>{char.name}</td>
                        <td>{char.height}</td>
                        <td>{char.mass}</td>
                        <td>
                            <Link to={`/entity/${char.name}`} className="btn btn-info btn-sm">
                                View Details
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-between">
                <button
                    className="btn btn-secondary"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>
                <button
                    className="btn btn-secondary"
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default HomePage;
