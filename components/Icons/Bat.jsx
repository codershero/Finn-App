import React from 'react';

const Bat = () => {
  return (
    <>
       <div className="market-grid__item " style={{width:"auto"}}>
        <a  href="#">
            <div style={{margin:"4px auto"}}><svg xmlns="http://www.w3.org/2000/svg" width="42" height="28" fill="none" viewBox="0 0 42 28"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M35 25l3.638-7.276a.5.5 0 00-.447-.724H3.809a.5.5 0 00-.447.724L7 25m-6 1.919a8.997 8.997 0 004.302-.47A9.682 9.682 0 009 24a8.158 8.158 0 002.717 2.157 7.493 7.493 0 003.283.763c1.13 0 2.25-.26 3.283-.763A8.158 8.158 0 0021 24a8.157 8.157 0 002.717 2.156 7.494 7.494 0 003.283.763c1.13 0 2.25-.26 3.283-.763A8.157 8.157 0 0033 24a9.681 9.681 0 003.698 2.45 8.998 8.998 0 004.302.469M13 2l-2 2-2-2M7 8l-2 2-2-2m18 9v-4m0 0h14L21 1v12z"/></svg></div> 
            <span className="text-12 mt-8 md:text-14" style={{color:" #474445"}}>Båt</span>
        </a>
    </div>
    </>
  );
};

export default Bat;