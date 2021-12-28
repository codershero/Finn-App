import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Bat from "./../Icons/Bat";
import Bil from "./../Icons/Bil";
import Bilabonnement from "./../Icons/Bilabonnement";
import Einedom from "./../Icons/Einedom";
import Job from "./../Icons/Job";
import Konomi from "./../Icons/Konomi";
import Mc from "./../Icons/Mc";
import Mittanbud from "./../Icons/Mittanbud";
import Moteplassen from "./../Icons/Moteplassen";
import Netbil from "./../Icons/Netbil";
import Reise from "./../Icons/Reise";
import Toreget from "./../Icons/Toreget";

const Brand = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-2">
            <Toreget />
          </div>
          <div className="col-2">
            <Einedom />
          </div>
          <div className="col-2">
            <Bil />
          </div>
          <div className="col-2">
            <Job />
          </div>
          <div className="col-2">
            <Reise />
          </div>
          <div className="col-2">
            <Bat />
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-2">
            <Bilabonnement />
          </div>
          <div className="col-2">
            <Konomi />
          </div>
          <div className="col-2">
            <Mc />
          </div>
          <div className="col-2">
            <Mittanbud />
          </div>
          <div className="col-2">
            <Moteplassen />
          </div>
          <div className="col-2">
            <Netbil />
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
