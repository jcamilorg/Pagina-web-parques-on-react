/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Styles/footerStyle.css";

export default function FooterParques() {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div class="InfoContactCar text-start">
              <div>
                <span class="InfoFooter">Av. Esperanza # 62-49</span>
                <span class="InfoFooter">Costado Esfera Pisos 6 y 7 </span>
                <span class="InfoFooter">Bogotá - Colombia</span>
                <span class="InfoFooter">En Bogotá: +57(1) 580 11 11</span>
                <span class="InfoFooter">
                  Línea Gratuita: 01 8000 915 317 -
                </span>
                <span class="InfoFooter">01 8000 913606</span>
                <span class="InfoFooter">http://www.car.gov.co/</span>
              </div>
            </div>
          </div>
          <div class="VerticalLine d-none d-lg-block"></div>
          <hr className="d-lg-none my-4" />
          <div className="col-lg-4 col-md-12">
            <div class="RedesCAR">
              <h4>Nuestras redes</h4>
              <div class="ContainerImgRedes">
                <img
                  height="50px"
                  width="50px"
                  src="https://icones.pro/wp-content/uploads/2021/02/facebook-icone-vert.png"
                />
                <img
                  height="50px"
                  width="50px"
                  src="https://i.pinimg.com/originals/c8/34/83/c834837f93fd808920f98aac61dc9b12.jpg"
                />
                <img
                  height="50px"
                  width="50px"
                  src="data:image/png;base64,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"
                />
                <img
                  height="50px"
                  width="50px"
                  src="data:image/png;base64,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"
                />
              </div>
            </div>
          </div>
          <hr className="d-lg-none my-4" />
          <div className="col-lg-2 col-md-12">
            <div class="ContainerImgLogoCAR">
              <img height="100px" width="100px" src="https://sidcar.car.gov.co/Diseno/Imagenes/Principal/LogoCAR.png"/>
            </div>
          </div>
          <hr className="d-lg-none my-4" />
        </div>
      </div>
      </footer>
    </>
  );
}
