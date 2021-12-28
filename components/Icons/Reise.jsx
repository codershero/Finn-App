import React from 'react';

const Reise = () => {
  return (
    <>
       <div className="market-grid__item " style={{width:"auto"}}>
        <a  href="#">
            <div style={{margin:"4px auto"}}><svg xmlns="http://www.w3.org/2000/svg" width="42" height="28" fill="none" viewBox="0 0 42 28"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 13h-5.142a3.844 3.844 0 01-1.97-.483 4.057 4.057 0 01-1.49-1.431L1 1h3.899l5.459 4H37a4 4 0 010 8H27M9 9H2m13 4l2.571-2H27v4h-9.429L15 13zm16 14a3 3 0 112.152-5.09A3.999 3.999 0 1137 27h-6zM7 18a2.999 2.999 0 00-2.933 2.356A1.943 1.943 0 003 20a2 2 0 100 4h4a3 3 0 000-6z"/></svg></div> 
            <span className="text-12 mt-8 md:text-14" style={{color:"#474445"}}>Reise</span>
        </a>
    </div>
    </>
  );
};

export default Reise;