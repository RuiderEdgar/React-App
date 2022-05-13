import React, {useState, useEffect, useReducer} from 'react'

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TO_FAVORITE':
      return{
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default: 
      return state;
  }
}

export const Genshin = () => {
    const [personajes, setPersonajes] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    useEffect(() => {
        fetch('https://genshin-app-api.herokuapp.com/api/characters?/')
        .then(response => response.json())
        .then(data => setPersonajes(data.payload.characters));
    }, []);

    const handleClick = (favorite) => {
      dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

  return (
    <div className="Genshin">

        {favorites.favorites.map(favorite => (
          <li key={favorite.name}>
            {favorite.name}
          </li>
        ))}

        {personajes.map(characters => (
          <div className='cards-container' key={characters.name}>
            <img className='imgCharacter' src={characters.cardImageURL} alt="image character"/>
            <div className='txt-container'>
              <h2>{characters.name}</h2>
              <p><span className='bold'>Title:</span> {characters.title}</p>
              <p><span className='bold'>Element:</span> {characters.element}</p>
              <p><span className='bold'>Stars:</span> {characters.rarity}</p>
              <p><span className='bold'>Gender:</span> {characters.gender}</p>
              <p><span className='bold'>Weapon:</span> {characters.weaponType}</p>
              <p><span className='bold'>Birthday:</span> {characters.birthday}</p>
              <p>
                <span className='bold'>Description:</span>
                <br />
                <span>{characters.description}</span> 
              </p>
              <div>
                <button type='button' onClick={() => handleClick(characters)}>
                  Agregar a favoritos
                </button>
              </div>
            </div>
          </div>
        ))}
    </div> 
  )
}

export default Genshin;
