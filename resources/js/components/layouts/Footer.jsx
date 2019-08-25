import React from "react";

const Footer = () => {
  return (
    <div className="w-100 mb-0" style={{ background: "#02041f" }}>
      <div className="container py-2 row justify-content-between mx-auto">
        <p className="text-white m-0 col-md-6 text-center">
          CopyRights © Reserved
        </p>
        <p className="text-white m-0 col-md-6 text-center">
          Made With Love By{" "}
          <a
            className="font-weight-bold "
            href="http://injazmediagroups.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0d98d8" }}
          >
            Injaz
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
