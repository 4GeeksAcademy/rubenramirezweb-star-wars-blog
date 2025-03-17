import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import PeopleCard from "../components/PeopleCard.jsx";
import VehiclesCard from "../components/VehiclesCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();


	const getPeople = async () => {

		try {
			const response = await fetch('https://www.swapi.tech/api/people');

			if (!response.ok) {
				throw new Error("Ocurrió un error al llamar el endpoint 'people' ");
			}

			const data = await response.json();

			dispatch({ type: 'set_people_data', payload: data.results })


		} catch (error) {
			console.log(error);
		}
	};

	const getVehicles = async () => {

		try {
			const response = await fetch('https://www.swapi.tech/api/vehicles');

			if (!response.ok) {
				throw new Error("Ocurrió un error al llamar el endpoint 'Vehicles' ");
			}

			const data = await response.json();

			dispatch({ type: 'set_vehicles_data', payload: data.results })


		} catch (error) {
			console.log(error);
		}
	};


	useEffect(() => {
		getPeople();
		getVehicles();
	}, []);

	return (
		<div className="container">
			<h2 className="mx-5 mt-5 text-danger">Characters</h2>
			<div className="text-center mt-5 d-flex flex-row gap-3 mx-5 my-5 overflow-auto overflow-scroll">
				{store.people.map((item, index) => {

					return <PeopleCard key={item.uid} item={item} />

				})}
			</div>
			
			<h2 className="mx-5 mt-5 text-danger">Vehicles</h2>
			<div className="text-center mt-5 d-flex flex-row gap-3 mx-5 my-5 overflow-x-auto">
				{store.vehicles.map((item, index) => {

					return <VehiclesCard key={item.uid} item={item} />

				})}
			</div>
		</div>

	);
}; 