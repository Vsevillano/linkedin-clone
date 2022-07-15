import React from 'react';
import { Avatar } from '@material-ui/core';
import TurnedInIcon from '@material-ui/icons/TurnedIn';

import './styles.css';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://img.freepik.com/fotos-premium/circuito-tecnologico-azul-morado_73426-205.jpg?w=2000" alt='fondo' />        
            <Avatar className='sidebar__avatar'/>
            <h3>Victoriano Sevillano</h3>
            <h4>victorianosevillano@gmail.com</h4>
            <div className='sidebar__contents'>
                <div className='sidebar__cont'>
                    <p>Contacto</p>
                    <p>2</p>
                </div>
                <div className='sidebar__cont'>
                    <p>
                        <a href='/#'>
                            Acceder a información y herramientas <br/>
                            exclusivas <br/>
                            {""}
                            <b>Prueba Premium gratis durante 1 mes </b>
                        </a>
                    </p>
                </div>
                <div className='sidebar__cont'>
                    <div className='sidebar_marcadorre'>
                        <TurnedInIcon className="sidebar__icons"/>
                        <p>Marcadores</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
