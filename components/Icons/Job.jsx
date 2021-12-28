import React from 'react';

const Job = () => {
  return (
    <>
       <div className="market-grid__item " style={{width:"auto"}}>
        <a href="#">
            <div style={{margin:"4px auto"}}><svg xmlns="http://www.w3.org/2000/svg" width="42" height="28" fill="none" viewBox="0 0 42 28"><path fill="currentColor" d="M39 12a1 1 0 10-2 0h2zM5 12a1 1 0 10-2 0h2zm1-6h9V4H6v2zm10-1V3h-2v2h2zm1-3h8V0h-8v2zm-2 4h12V4H15v2zm12 0h9V4h-9v2zm-1-3v2h2V3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zM3 24a3 3 0 003 3v-2a1 1 0 01-1-1H3zm34 0a1 1 0 01-1 1v2a3 3 0 003-3h-2zM36 6a1 1 0 011 1h2a3 3 0 00-3-3v2zM16 3a1 1 0 011-1V0a3 3 0 00-3 3h2zM6 4a3 3 0 00-3 3h2a1 1 0 011-1V4zm26 15a7 7 0 007-7h-2a5 5 0 01-5 5v2zm-22-2a5 5 0 01-5-5H3a7 7 0 007 7v-2zm9 5h4v-2h-4v2zm4-8h-4v2h4v-2zm0 2h2a2 2 0 00-2-2v2zm0 6a2 2 0 002-2h-2v2zm-4-2h-2a2 2 0 002 2v-2zm0-6a2 2 0 00-2 2h2v-2zM5 24V7H3v17h2zM37 7v17h2V7h-2zm-1 18H6v2h30v-2zm-13-6h9v-2h-9v2zm-13 0h9v-2h-9v2zm15 1v-4h-2v4h2zm-8-4v4h2v-4h-2z"/></svg></div> 
            <span className="text-12 mt-8 md:text-14" style={{color:"#474445"}}>Jobb</span>
        </a>
    </div>
    </>
  );
};

export default Job;