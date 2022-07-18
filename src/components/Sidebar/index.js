import React from "react";
import { Avatar } from "@material-ui/core";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import AddIcon from "@material-ui/icons/Add";
import "./styles.css";

export const Sidebar = () => {

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://img.freepik.com/fotos-premium/circuito-tecnologico-azul-morado_73426-205.jpg?w=2000"
          alt="fondo"
        />
        <Avatar className="sidebar__avatar" />
        <h3>Victoriano Sevillano</h3>
        <h4>victorianosevillano@gmail.com</h4>
        <div className="sidebar__contents">
          <div className="sidebar__cont">
            <p>Contacto</p>
            <p>2</p>
          </div>
          <div className="sidebar__cont">
            <p>
              <a href="/#">
                Acceder a información y herramientas <br />
                exclusivas <br />
                {""}
                <b>Prueba Premium gratis durante 1 mes </b>
              </a>
            </p>
          </div>
          <div className="sidebar__cont">
            <div className="sidebar__marcadores">
              <TurnedInIcon className="sidebar__icons" />
              <p>Marcadores</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="sidebar__bottom">
        <ul>
          <li>
            <p>Grupos</p>
          </li>
          <li>
            <p>Eventos</p>
          </li>
          <li>
            <p>Hastag seguidores</p>
          </li>
        </ul>
        <AddIcon className="sidebar__box"/>
      </div>
      <div className="sidebar__recientes">
        <p>Recientes</p>
        {recentItem("react.js")}
        {recentItem('node.js')}
        {recentItem('firebase.js')}
        {recentItem('graphql')}
        {recentItem('developer')}
        {recentItem('design')}
      </div>
    </div>
  );
};
