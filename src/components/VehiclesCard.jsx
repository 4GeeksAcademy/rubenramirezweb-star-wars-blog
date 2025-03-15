import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link } from 'react-router-dom';

const VehiclesCard = ({ item }) => {

    const { dispatch } = useGlobalReducer();

    const addToFavorites = (id, name) => {
    
        dispatch({ type: 'add_to_favorite', payload: { "uid": id, "name": name } })
    };

    return (

        <div className="card mb-4" style={{ minWidth: "350px", minHeight: "400px" }}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="People card" />
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
                    <Link to={`/details/${item.uid}`}>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                        >Learn more!
                        </button>
                    </Link>

                    <a href="#" className="btn btn-outline-warning">
                        <i className="fa-regular fa-heart" onClick={() => {
                            addToFavorites(item.uid, item.name);
                        }}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default VehiclesCard