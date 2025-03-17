import React, { useEffect, useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link } from 'react-router-dom';

const PeopleCard = ({ item }) => {

    const { dispatch } = useGlobalReducer();
    const [isFavorite, setIsFavorite] = useState(false)

    const addToFavorites = (event, id, name) => {
        setIsFavorite(!isFavorite);
        console.log(isFavorite)
        console.log(event.type)
        const clicFavorite = event.type === 'click';
        if (clicFavorite && !isFavorite) {
            dispatch({ type: 'add_to_favorite', payload: { "uid": id, "name": name, type: 'people' } });
            setIsFavorite(true);
        } else if (clicFavorite && isFavorite) {
            dispatch({ type: 'delete_favorite', payload: { id } });
            setIsFavorite(false);
        }
    };


    return (
        <div>
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
                        <Link to={`/details/people/${item.uid}`}>
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
                                    addToFavorites(event, item.uid, item.name);
                                }}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PeopleCard