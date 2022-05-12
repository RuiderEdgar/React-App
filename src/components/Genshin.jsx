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
          <div className='cards-container'>
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
            </div>
          </div>
        ))}
    </div> 
  )
}

export default Genshin;
