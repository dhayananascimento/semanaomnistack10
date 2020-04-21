import React, { useState, useEffect } from 'react';
import './style.css';

function DevForm({ onSubmit }) {

    const [github_username,setGithubUsername] = useState('');
    const [techs,SetTechs] = useState('');
    const [latitude,SetLatitude] = useState('');
    const [longitude,SetLongitude] = useState('');

    useEffect(() => {
        SetLatitude(-21.5267226);
        SetLongitude(-42.6413425);
      }, []);

    async function handleSubmit(e){
        e.preventDefault();
        await onsubmit({
            github_username,
            techs,
            latitude,
            longitude
          });
          setGithubUsername('');
          SetTechs('');
    }

    return (
        <form onSubmit={handleSubmit}> 
            <div className="input-block"> 
              <label htmlFor="github_username">Usuario do Github</label>
              <input name="github_username" id="github_username" value={github_username} onChange={ e => setGithubUsername(e.target.value)} required/>
            </div>

            <div className="input-block"> 
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" value={techs} onChange={ e => SetTechs(e.target.value)} required/>
            </div>

            <div className="input-group">
              <div className="input-block"> 
                <label htmlFor="latitude">Latitude</label>
                <input type="number" name="latitude" id="latitude" value={latitude} onChange={ e => SetLatitude(e.target.value)} required/>
              </div>

              <div className="input-block"> 
                <label htmlFor="longitude">Longitude</label>
                <input type="number" name="longitude" id="longitude" value={longitude} onChange={ e => SetLongitude(e.target.value)} required/>
              </div>
            </div>

            <button type="submit">Salvar</button>
          </form>
    );
}

export default DevForm;