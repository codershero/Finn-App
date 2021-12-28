import React from "react";

const Moteplassen = () => {
  return (
    <>
      <div className="market-grid__item " style={{ width: "auto" }}>
        <a
          href="#"
          data-moteplassen-link
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
              d="M11.8985 8.17007C15.1809 6.69566 18.9993 8.24913 20.4268 11.6396C20.8462 12.6362 21.0122 13.6803 20.9548 14.6955L20.9657 29L10.4884 19.5826C9.66501 18.918 8.98515 18.0379 8.53911 16.9783C7.11191 13.5878 8.61607 9.64419 11.8985 8.17007ZM22.442 9.37448C24.1537 5.58372 28.5158 3.94361 32.1859 5.7115C35.856 7.47881 37.4437 11.9849 35.7323 15.7757C35.2292 16.8898 34.4975 17.8181 33.6214 18.5287L21.6722 28.9999L21.7672 13.0322C21.6947 11.8134 21.9075 10.5589 22.442 9.37448ZM14.4829 10.4642C12.5307 10.4642 10.9481 12.0991 10.9481 14.1156C10.9481 16.132 12.5307 17.7669 14.4829 17.7669C16.4352 17.7669 18.0178 16.132 18.0178 14.1156C18.0178 12.0991 16.4352 10.4642 14.4829 10.4642ZM29.4762 8.52613C27.4642 8.52613 25.8327 10.2112 25.8327 12.2895C25.8327 14.3678 27.4642 16.0528 29.4762 16.0528C31.4883 16.0528 33.1197 14.3678 33.1197 12.2895C33.1197 10.2112 31.4883 8.52613 29.4762 8.52613Z"
              fill="#E74C3B"
            />
          </svg>

          <span className="text-12 mt-8 md:text-14" style={{color:" #474445"}}>
            Møteplassen
          </span>
        </a>
      </div>
    </>
  );
};

export default Moteplassen;
