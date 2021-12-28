import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import classes from '../../styles/Finnbox.module.css'
const Finnbox = () => {
  return (
    <div className="container pt-5">
      <div className={`shadow-sm p-3 mb-5 bg-white rounded ${classes.card}`}>
        <div className="contentBox">
          <h3>Hjelp til jul hos FINN</h3>
          <p>
            Julen skal være en fin tid for alle. Dessverre opplever mange at
            pengene ikke strekker til. <br /> Vi ønsker å skape juleglede ved å gjøre
            det mulig å be om eller tilby hjelp til jul.
          </p>
          <button className={classes.btn1}>Be om eller tilby hjelp til jul</button>
          <button className={classes.btn2}>Se annonsene</button>
        </div>
      </div>
    </div>
  );
};

export default Finnbox;
