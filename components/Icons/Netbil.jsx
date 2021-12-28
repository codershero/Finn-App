import React from "react";

const Netbil = () => {
  return (
    <>
      <div className="market-grid__item " style={{ width: "auto" }}>
        <a
          href="#"
        >
          <svg
            width="45"
            height="35"
            viewBox="0 0 45 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="45" height="35" fill="white" />
            <path
              d="M6.65422 24.347C4.4512 22.1439 4.4512 18.5701 6.65422 16.3671C8.85724 14.1641 12.431 14.1641 14.6341 16.3671C16.8371 18.5701 16.8371 22.1439 14.6341 24.347C12.431 26.55 8.85724 26.55 6.65422 24.347Z"
              fill="#004046"
            />
            <path
              d="M29.3593 24.347C27.1563 22.1439 27.1563 18.5701 29.3593 16.3671C31.5623 14.1641 35.1361 14.1641 37.3392 16.3671C39.5422 18.5701 39.5422 22.1439 37.3392 24.347C35.1361 26.55 31.5623 26.55 29.3593 24.347Z"
              fill="#004046"
            />
            <path
              d="M33.3499 20.3578C33.3499 14.0963 28.2585 9 21.997 9C15.7355 9 10.6392 14.0963 10.6392 20.3578H33.3499Z"
              fill="#FF8752"
            />
          </svg>

          <span
            className="text-12 mt-8 md:text-14"
            style={{ color: "#474445" }}
          >
            Nettbil
          </span>
        </a>
      </div>
    </>
  );
};

export default Netbil;
