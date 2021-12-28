import React from 'react';

const Einedom = () => {
  return (
    <>
       <div className="market-grid__item" >
        <a href="#"            
            >
            <div style={{margin:"4px auto"}}><svg xmlns="http://www.w3.org/2000/svg" width="42" height="28" fill="none" viewBox="0 0 42 28"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13L24 1l15 12m-3 14H12m24 0h5m-5 0V5h-4v2.4M12 27V10.6M12 27H5a4 4 0 114-4h1a2 2 0 012 2v2zm15-1v-6a1 1 0 00-1-1h-4a1 1 0 00-1 1v6m0-15.75v2.5c0 .69.576 1.25 1.286 1.25h3.428c.71 0 1.286-.56 1.286-1.25v-2.5C27 9.56 26.424 9 25.714 9h-3.428C21.576 9 21 9.56 21 10.25z"/></svg></div> 
            <span className="text-12 mt-8 md:text-14" style={{color:"#474445"}}>Eiendom</span>
        </a>
    </div>
    </>
  );
};

export default Einedom;