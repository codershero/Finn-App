import React from 'react';

const Konomi = () => {
  return (
    <>
      <div className="market-grid__item " style={{width:"auto"}}>
        <a  href="#">
            <div style={{margin:"4px auto"}}><svg xmlns="http://www.w3.org/2000/svg" width="42" height="28" fill="none" viewBox="0 0 42 28"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M29 11a4 4 0 014-4m-8 3a7.5 7.5 0 107.958 8.28M15 24H3a1 1 0 01-1-1V5a1 1 0 011-1h20M7 20H6M7 8H6m8 8.786c-.335.138-.7.214-1.083.214C11.306 17 10 15.657 10 14s1.306-3 2.917-3c.383 0 .748.076 1.083.214m26-.714a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"/></svg></div> 
            <span className="text-12 mt-8 md:text-14" style={{color:"#474445"}}>Økonomi</span>
        </a>
    </div>
    </>
  );
};

export default Konomi;