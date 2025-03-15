export const initialStore = () => {
  return {
    people: [],
    favorites: [],
    details: [],
    vehicles: []
  }
}

export default function storeReducer(store, action = {}) {
  

  switch (action.type) {
    case 'set_people_data':
    
    
      return {
        ...store,
        people: [...action.payload]
      }
    case 'add_to_favorite':
      const { uid, name } = action.payload;
      return {
        ...store,
        favorites: [...store.favorites, { uid: uid, name: name }]
      }
    case 'delete_favorite':
      const { id }  = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter((fav) => fav.uid !== id)
      }
    case 'set_vehicles_data':
      
      return {
        ...store,
        vehicles: [...action.payload]
      }


    default:
      throw Error('Unknown action.');
  }
}