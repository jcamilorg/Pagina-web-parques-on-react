/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Styles/headerStyle.css";

import { Link } from "react-router-dom";

export default function HeaderParques() {
  return (
    <div className="containerHeader">
      <header className="position-absolute">
        <div id="ContainerImgTopHeader">
          <input
            type="text"
            placeholder="(Desarrollo)Buscar en esta pagina 🔎"
          />
        </div>

        <nav className="navbar navbar-expand-lg navbar-light navbarCar text-start">
          <div className="container justify-content-center d-flex">
            <a href="#">
              <img
                className="ContainerImgHeader"
                src="https://parques.car.gov.co/Content/images/LOGO_CAR_CUATRICROMIA.png"
                width="150px"
              />
              <div className="SpaceContainerImgHeader"></div>
            </a>

            <button
              class="navbar-toggler m-2 position-absolute top-0 end-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto ">
                <Link to="/">Inicio</Link>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <Link to="/nuestros-parques">Parques</Link>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <Link to="/que-hacer">Qué hacer</Link>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <Link to="/horarios-y-tarifas">Horarios y tarifas</Link>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <Link to="/para-tener-encuenta">Para tener en cuenta</Link>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <Link to="/preguntas-frecuentes">Pregutas frecuentes</Link>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <Link to="/reservas">Reservas</Link>
                <div className="VerticalLine d-none d-lg-block"></div>
                <hr className="d-lg-none p-0 m-0" />

                <Link to="/contactanos">Contáctanos</Link>
                <hr className="d-lg-none p-0 m-0" />

              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
