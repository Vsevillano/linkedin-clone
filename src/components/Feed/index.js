import React, { useState } from "react";

import CreateIcon from '@material-ui/icons/Create'
import PhotoIcon from '@material-ui/icons/Photo'
import YouTubeIcon from '@material-ui/icons/YouTube'
import EventIcon from '@material-ui/icons/Event'
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit'

import "./styles.css";
import { InputIcon } from "./InputIcon";
import { Post } from "./Post";

export const Feed = () => {
  const [input, setInput] = useState("");

  const sendPost = (e) => {
    e.preventDefault();
    setInput('');
  }

  return (
    <div className="feed">
      <div className="feed__containerInput">
        <div className="feed__input">
          <CreateIcon className="feed__input__icon"/>
          <form>          
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Crear publicación"
            />
            <button onClick={sendPost} type="submit">Enviar</button>
          </form>
        </div>
        <div className="feed__inputIcon">
          <InputIcon 
            Icon={PhotoIcon}
            title='Foto'
            color='#70b5f9'/>
          <InputIcon 
            Icon={YouTubeIcon}
            title='Video'
            color='#7fc15e'/>
          <InputIcon 
            Icon={EventIcon}
            title='Evento'
            color='#e7a33e'/>
          <InputIcon 
            Icon={VerticalSplitIcon}
            title='Escribir artículo'
            color='#f5987e'/>
        </div>
      </div>
      {/* POSTS */}
      <Post 
        name='Victoriano Sevillano' 
        description='victorianosevillano@gmail.com'
        mensage='Hola mundo!'
        photoURL='https://img.freepik.com/fotos-premium/lenguaje-programacion-desarrollo-web-codificacion-sitios-web-antecedentes-medios-mixtos_372999-6961.jpg?w=996'
        images='https://img.freepik.com/fotos-premium/lenguaje-programacion-desarrollo-web-codificacion-sitios-web-antecedentes-medios-mixtos_372999-6962.jpg?w=996'
      />

      <Post 
        name='Victoriano Sevillano' 
        description='victorianosevillano@gmail.com'
        mensage='Hola mundo!'
        photoURL='https://img.freepik.com/fotos-premium/lenguaje-programacion-desarrollo-web-codificacion-sitios-web-antecedentes-medios-mixtos_372999-6961.jpg?w=996'
        images='https://img.freepik.com/fotos-premium/lenguaje-programacion-desarrollo-web-codificacion-sitios-web-antecedentes-medios-mixtos_372999-6962.jpg?w=996'
      />

      <Post 
        name='Victoriano Sevillano' 
        description='victorianosevillano@gmail.com'
        mensage='Hola mundo!'
        photoURL='https://img.freepik.com/fotos-premium/lenguaje-programacion-desarrollo-web-codificacion-sitios-web-antecedentes-medios-mixtos_372999-6961.jpg?w=996'
        images='https://img.freepik.com/fotos-premium/lenguaje-programacion-desarrollo-web-codificacion-sitios-web-antecedentes-medios-mixtos_372999-6962.jpg?w=996'
      />

    </div>
  );
};
