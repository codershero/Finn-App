import React from 'react';
import Logo from '../Header/Logo';
import classes from '../../styles/Footer.module.css'
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="footerLogo">
              <Logo />
              <h4><a href="#">Mulighetenes marked</a></h4>
            </div>
          </div>
          <div className="col-2">
            <h3 className={classes.title}>For bedrifter</h3>
            <ul className={classes.ul}>
              <li><a href="#">Bli bedriftskunde</a></li>
              <li><a href="#">Informasjon og inspirasjon</a></li>
              <li><a href="#">Admin for bedrifter</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h3 className={classes.title}>Om FINN</h3>
            <ul className={classes.ul }>
              <li><a href="#">Jobbe i FINN</a></li>
              <li><a href="#">FINNspirasjon</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h3 className={classes.title}>Personvern</h3>
            <ul className={classes.ul}>
              <li><a href="#">Personvernerklæring</a></li>
              <li><a href="#">Personvern i FINN</a></li>
              <li><a href="#">Innstillinger for personvern</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h3 className={classes.title}>Få hjelp</h3>
            <ul className={classes.ul}>
              <li><a href="#">Kundeservice</a></li>
              <li><a href="#">Brukervilkår</a></li>
              <li><a href="#">Annonseregler</a></li>
            </ul>
          </div>
        </div>
        <hr style={{marginTop:"80px"}}/>
      </div>
    </footer>
  );
};

export default Footer;













