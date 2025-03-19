import React, { useEffect, useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { Link, useParams } from 'react-router-dom'
import { element } from 'prop-types';

const DetailsCard = () => {

    const { type, id } = useParams(); // Obtenemos el ID y el type desde la URL
    const [item, setItem] = useState("");
    const { store, dispatch } = useGlobalReducer();
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`Fetching data for type: ${type}, ID: ${id}`);
                console.log(type)
                let response
                if (type == "vehicles") {
                    const result = store.vehicles.find((element, index) => index == id)
                    console.log(result)
                    if (result) {
                        response = await fetch(`https://www.swapi.tech/api/${type}/${result.uid}`);
                    } 
                } else {
                    response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
                }

                

                if (!response.ok)
                    throw new Error('Ocurrió un error al obtener los datos');

                const data = await response.json();
                setItem(data.result.properties);
                console.log(data.result.properties)
            } catch (error) {
                console.log("Error fetching item details:", error)
            }
        };
        
        fetchData();
    }, [type, id]);

    

    console.log(store.vehicles)

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
                                    <h3 className="card-title">{item.name}</h3>
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
                            <p><strong>Name</strong><br />{item.name}
                            </p>

                            <p><strong>Birth Year</strong><br />{item.birth_year}
                            </p>

                            <p><strong>Gender</strong><br />{item.gender}
                            </p>

                            <p><strong>Height</strong><br />{item.height}
                            </p>

                            <p><strong>Skin Color</strong><br />{item.skin_color}
                            </p>

                            <p><strong>Eye Color</strong><br />{item.eye_color}
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
                                <img src={store.vehicles[id]?.image} className="img-fluid rounded-start" alt="..." />
                                
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">{item.name}</h3>
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
                            <p><strong>Name</strong><br />{item.name}
                            </p>

                            <p><strong>Cargo Capacity</strong><br />{item.cargo_capacity}
                            </p>

                            <p><strong>Consumables</strong><br />{item.consumables}
                            </p>

                            <p><strong>Crew</strong><br />{item.crew}
                            </p>

                            <p><strong>Lenght</strong><br />{item.length}
                            </p>

                            <p><strong>Model</strong><br />{item.model}
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
            )}
        </div>
    )
}

export default DetailsCard