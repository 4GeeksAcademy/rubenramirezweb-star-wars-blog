import React, { useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link } from 'react-router-dom';

const VehiclesCard = ({ item, index }) => {

    const { dispatch } = useGlobalReducer();
    const [isFavorite, setIsFavorite] = useState(false);

    const addToFavorites = (event, id, name) => {
        setIsFavorite(!isFavorite);
        const clicFavorite = event.type === 'click'

        if (clicFavorite && !isFavorite) {
            dispatch({ type: 'add_to_favorite', payload: { "uid": id, "name": name, type: 'vehicles' } });
            setIsFavorite(true);
        } else if (clicFavorite && isFavorite) {
            dispatch({ type: 'delete_favorite', payload: { id } });
            setIsFavorite(false);
        } 
    };

    return (

        <div className="card mb-4 d-flex flex-column justify-content-between" style={{ minWidth: "350px", minHeight: "400px" }}>
            <img src={item.image} className="card-img-top h-100" alt="People card" />
            <div className="card-body text-start">
                <h4 className="card-title">{item.name}</h4>
                <span className="card-text">
                    Gender: Femenino
                </span><br />
                <span className="card-text">
                    Hair Color: blond
                </span><br />
                <span className="card-text">
                    Eye-Color: blue
                </span><br />
                <div className="my-4 d-flex justify-content-between">
                    <Link to={`/details/vehicles/${index}`}>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                        >Learn more!
                        </button>
                    </Link>

                    <a href="#" className="btn btn-outline-warning">
                        <i
                            className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                            onClick={(event) => {
                                addToFavorites(event,item.uid, item.name);
                            }}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default VehiclesCard