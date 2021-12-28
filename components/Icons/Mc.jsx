import React from 'react';

const Mc = () => {
  return (
    <>
      <div className="market-grid__item " style={{width:"auto"}}>
        <a  href="#">
            <div style={{margin:"4px auto"}}><svg xmlns="http://www.w3.org/2000/svg" width="42" height="28" fill="none" viewBox="0 0 42 28"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M36 7.5V10M5 8h5.5l2.5 3m4 5v5h6l4-8 6-2.5V7m-16 9l-4-5m4 5l-4.5 2m.5-7h7l1.447-2.894A2 2 0 0123.237 7H33m0 0l-7-5m6 13.5L30 12m11 9a6 6 0 11-12 0 6 6 0 0112 0zm-28 0a6 6 0 11-12 0 6 6 0 0112 0z"/></svg></div> 
            <span className="text-12 mt-8 md:text-14" style={{color:"#474445"}}>MC</span>
        </a>
    </div>
    </>
  );
};

export default Mc;