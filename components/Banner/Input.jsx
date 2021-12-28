import React from "react";
import classes from "../../styles/Banner.module.css";
const Input = () => {
  return (
    <div className={classes.banner}>
      <div className="container">
        <div className={classes.flexBox}>
          <div className={classes.InputBox}>
            <form
              className="fps fps--overlay"
              id="global-search"
              action="https://www.finn.no/globalsearchlander"
              role="search"
              data-base-url="https://www.finn.no/podium-resource/global-search/api"
              data-finnbase-url="https://www.finn.no"
              data-beta="REGULAR"
              data-where="FRONTPAGE"
              data-is-mobile="false"
              data-search-keys=""
              data-vertical=""
              data-unleash-isNoTermQueryEnabled="true"
              data-is-dropdown
            >
              <div className="fps__form">
                <input
                  className={classes.fps__input}
                  id="search"
                  type="search"
                  name="q"
                  placeholder="Søk etter iPhone eller dølahest"
                  aria-label="Søk"
                />
                <button className={classes.fps__submit} aria-label="Søk">
                  <svg
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    height="32"
                    width="32"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22.412
                            21.198l-.558.656-.656.558a10.449 10.449 0 0 1-6.754 2.476C8.685
                            24.888 4 20.203 4 14.444 4 8.685 8.685 4 14.444 4c5.759 0 10.445
                            4.685 10.445 10.444 0 2.473-.88 4.872-2.477 6.754zm1.524
                            1.294a12.393 12.393 0 0 0 2.953-8.048C26.889 7.571 21.317 2 14.444 2
                            7.572 2 2 7.571 2 14.444c0 6.873 5.572 12.444 12.444 12.444 3.069 0
                            5.878-1.11 8.048-2.952L28.556 30 30 28.555l-6.064-6.063z"
                    />
                  </svg>
                </button>
              </div>
              <div data-dropdown-insertion></div>
              <div data-fullscreen-search-focus tabIndex="-1"></div>
            </form>
          </div>
          <div className={classes.iconBox}>
            <div className="-nr-16 mx-16 mt-4 ml-0 md:ml-16">
              <a
                id="search-finn-kart"
                href="https://kart.finn.no"
                style={{ color: "#474445" }}
                className="-mr-6 text-gray-800 u-licorice flex"
              >
                <span className="text-gray-400 pr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#818B9A"
                      fillRule="evenodd"
                      d="M21.551 4.647L15.986 2.42v6.114a.75.75 0 11-1.5 0V2.421L8.764 4.71v13.912l2.582-1.033a.75.75 0 01.557 1.393l-3.24 1.296a1.75 1.75 0 01-1.3 0l-6.221-2.49a1.75 1.75 0 01-1.1-1.624V2.79a1.75 1.75 0 012.4-1.625L7.92 3.357a.25.25 0 00.186 0L14.586.765a1.75 1.75 0 011.3 0l6.222 2.49c.665.265 1.1.908 1.1 1.624v4.379a.75.75 0 01-1.5 0V4.879a.25.25 0 00-.157-.232zM7.264 4.71l-5.38-2.152a.25.25 0 00-.342.232v13.374a.25.25 0 00.157.232l5.565 2.226V4.71zm10.86 7.103a3.583 3.583 0 00-3.582 3.583c0 .42.191 1.042.568 1.807.365.743.863 1.537 1.378 2.272a26.001 26.001 0 001.637 2.098 25.974 25.974 0 001.637-2.099c.515-.734 1.012-1.528 1.378-2.27.377-.766.568-1.388.568-1.808a3.583 3.583 0 00-3.583-3.583zm-5.082 3.583a5.083 5.083 0 0110.166 0c0 .777-.322 1.656-.722 2.47-.412.836-.955 1.698-1.495 2.47-.542.773-1.09 1.47-1.522 1.977a12.44 12.44 0 01-.557.618 3.353 3.353 0 01-.217.206c-.033.027-.08.065-.134.1a.782.782 0 01-.872 0 1.273 1.273 0 01-.134-.1 3.327 3.327 0 01-.217-.206 12.44 12.44 0 01-.557-.618 27.474 27.474 0 01-1.522-1.978c-.54-.771-1.084-1.633-1.495-2.47-.4-.813-.723-1.692-.723-2.469zm6.527 0a1.444 1.444 0 11-2.889 0 1.444 1.444 0 012.89 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <strong>FINN kart</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
