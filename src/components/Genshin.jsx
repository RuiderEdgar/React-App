import React, {useState, useEffect} from 'react'

export const Genshin = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        fetch('https://genshin-app-api.herokuapp.com/api/characters?/')
        .then(response => response.json())
        .then(data => setPersonajes(data.payload.characters));
    }, []);

  return (
    <div className="Genshin">
        {personajes.map(characters => (
            <h2>{characters.name}</h2>
        ))}
    </div>
  )
}

export default Genshin;