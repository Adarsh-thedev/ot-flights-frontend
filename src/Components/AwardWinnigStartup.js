import React from "react";

const AwardWinnigStartup = () => {
  return (
    <div className="nunito mb5 no-margin-AWS">
      <h1 className="f1 center mb5">Award-Winning Startup</h1>
      <div className=" container-fluid center">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-4 col-md-2 mb2">
            <a
              href="https://hatchcolab.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                className="grow d-flex center"
                src="https://raw.githubusercontent.com/greco-paro-association/shared-hosting/master/images/Hatch_Logo_Primary_RGB.png"
                alt="card1"
                width="160px"
              />
            </a>
            <div className="col f4" style={{ color: "#444" }}>
              <p className="mb-0 b pb-2 pt4">Finalist</p>
              <p>Social Tech Accelerator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardWinnigStartup;
