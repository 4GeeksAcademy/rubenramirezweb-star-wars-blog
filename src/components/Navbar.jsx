import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	const deleteName = (id) => {
		
		try {

			 dispatch({ type: 'delete_favorite', payload: { id } });

		} catch (error) {
			
		}
	};


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img className="navbar-brand mb-0" src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" alt="" style={{ width: '120px', height: '80px' }} />
				</Link>
				<div className="ml-auto">
					<div>
						<div className="dropdown">
							<button
								className="btn btn-primary px-3 dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Favorites <span className="bg-secondary p-1 rounded">{store.favorites.length}</span>
							</button>
							<ul className="dropdown-menu">
								{store.favorites.length > 0 ? (
									store.favorites.map((fav, index) => (
										<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
											<Link to={`/details/${fav.uid}`}>
											{fav.name}
											</Link>
											<i className="fas fa-trash-alt text-danger ms-2" style={{ cursor: "pointer" }} onClick={() => deleteName(fav.uid)}></i>
										</li>
									))
								) : (
									<h5 className="text-center text-muted">(empty)</h5>
								)}
							</ul>
						</div>

					</div>
				</div>
			</div>
		</nav>
	);
};