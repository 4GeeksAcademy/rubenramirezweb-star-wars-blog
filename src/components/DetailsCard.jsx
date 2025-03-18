import React, { useEffect, useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { Link, useParams } from 'react-router-dom'

const DetailsCard = () => {

    const { type, id } = useParams(); // Obtenemos el ID y el type desde la URL
    const [person, setPerson] = useState("");
    // const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`Fetching data for type: ${type}, ID: ${id}`);

                const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);

                if (!response.ok)
                    throw new Error('Ocurrió un error al obtener los datos');

                const data = await response.json();
                setPerson(data.result.properties);
                console.log(data.result.properties)
            } catch (error) {
                console.log("Error fetching person details:", error)
            }
        };
        
        fetchData();
    }, [type, id]);

    return (
        <div>
            {type === 'people' ? (

                <div className="d-flex justify-content-center mt-5">
                    <div className="card mb-3 border border-0" style={{ maxWidth: 1200 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${id}.jpg`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">{person.name}</h3>
                                    <p className="card-text">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between px-5 mt-4 text-danger border-top border-danger pt-3">
                            <p><strong>Name</strong><br />{person.name}
                            </p>

                            <p><strong>Birth Year</strong><br />{person.birth_year}
                            </p>

                            <p><strong>Gender</strong><br />{person.gender}
                            </p>

                            <p><strong>Height</strong><br />{person.height}
                            </p>

                            <p><strong>Skin Color</strong><br />{person.skin_color}
                            </p>

                            <p><strong>Eye Color</strong><br />{person.eye_color}
                            </p>
                        </div>
                        <div className="mt-5 mb-5 d-flex justify-content-center">
                            <Link to="/">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >Go Home
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            ) : (
                <div className="d-flex justify-content-center mt-5">
                    <div className="card mb-3 border border-0" style={{ maxWidth: 1200 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://picsum.photos/800/600" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">{person.name}</h3>
                                    <p className="card-text">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between px-5 mt-4 text-danger border-top border-danger pt-3">
                            <p><strong>Name</strong><br />{person.name}
                            </p>

                            <p><strong>Cargo Capacity</strong><br />{person.cargo_capacity}
                            </p>

                            <p><strong>Consumables</strong><br />{person.consumables}
                            </p>

                            <p><strong>Crew</strong><br />{person.crew}
                            </p>

                            <p><strong>Lenght</strong><br />{person.length}
                            </p>

                            <p><strong>Model</strong><br />{person.model}
                            </p>
                        </div>
                        <div className="mt-5 d-flex justify-content-center">
                            <Link to="/">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >Go Home
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default DetailsCard