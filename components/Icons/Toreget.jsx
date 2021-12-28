import React from 'react';

const Toreget = () => {
  return (
    <>
       <div className="market-grid__item ">
        <a className="text-dark"
            href="#"    id="first-market-link">
            <div style={{margin:"4px auto"}}><svg xmlns="http://www.w3.org/2000/svg" width="42" height="28" fill="none" viewBox="0 0 42 28"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 11V9a7 7 0 017-7h8m15 9V9a7 7 0 00-7-7h-8m15 9h-1a2 2 0 00-2 2v5H21m15-7h1a2 2 0 012 2v5a6 6 0 01-6 6h-1m0 0H10m22 0v3m-22-3H9a6 6 0 01-6-6v-5a2 2 0 012-2h2a2 2 0 012 2v5h12m-11 6v3m11-9V2"/></svg></div> 
            <span className="text-12 mt-8 md:text-14" style={{color:"#474445"}}>Torget</span>
        </a>
    </div>
    </>
  );
};

export default Toreget;