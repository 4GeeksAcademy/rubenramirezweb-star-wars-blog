import React, { useEffect, useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { useParams } from 'react-router-dom'

const DetailsCard = () => {

    const { id } = useParams(); // Obtenemos el ID desde la URL
    const [person, setPerson] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`Fetching data for ID: ${id}`);

                const response = await fetch(`https://www.swapi.tech/api/people/${id}`);

                if(!response.ok)
                    throw new Error('Ocurrió un error al obtener los datos');

                const data = await response.json();
                setPerson(data.result.properties);
                console.log(data.result.properties)
            } catch (error) {
                console.log("Error fetching person details:", error)
            }
        };
        // console.log(person)
        fetchData();
    }, [id]);

    return (
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
            </div>

        </div>
    )
}

export default DetailsCard