import Image from "next/image";
import React, { useState } from "react";
import classes from "../../styles/Card.module.css";
const Card = (props) => {
  const [showQute, setShowQute] = useState(false);

  function handleShowQute() {
    setShowQute(!showQute);
  }

  return (
    <div className="col-md-4 pl-2 pr-2">
      <div className={`card mt-3 p-2 ${classes.cardContent}`}>
        <Image
          className={classes.rounded}
          src={props.cardData.img}
          alt="Image"
          height={300}
          width={200}
        />
        <div className="d-flex justify-content-between mt-2 ">
          <p>Demo Text</p>
          {showQute && (
            <div className={classes.qute}>
              <p>Add Just Demo Text</p>
              <p>Add Just Demo Qute here</p>
            </div>
          )}
          <b onClick={handleShowQute}>...</b>
        </div>
        <h5 className={classes.title}>
          <a href="#">{props.cardData.des}</a>
        </h5>
      </div>
    </div>
  );
};

export default Card;
