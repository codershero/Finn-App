import Image from "next/image";
import React from "react";
import Fb from "../../public/Assests/facebook.png";
import Tr from "../../public/Assests/twitter.png";
import Insta from "../../public/Assests/instagram.png";
import Yt from "../../public/Assests/youtube.png";
import classes from '../../styles/CopyRight.module.css'
const CopyRight = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <ul className={classes.media}>
            <li>
              <a href="#">
                {" "}
                <Image src={Fb} height={20} width={20} alt="facebook" />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <Image src={Tr} height={20} width={20} alt="twitter" />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <Image
                  src={Insta}
                  height={20}
                  width={20}
                  alt="instagram"
                />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <Image src={Yt} height={20} width={20} alt="youtube" />{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-8">
          <div className={classes.content}>
            <small>
              Innholdet er beskyttet etter åndsverkloven. Regelmessig,
              systematisk eller kontinuerlig innhenting, lagring, indeksering,
              distribusjon og all annen form for sammenstilling av data tillates
              ikke uten eksplisitt, skriftlig tillatelse fra FINN.no.
            </small>
            <p>© 1996–2021 FINN.no AS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
