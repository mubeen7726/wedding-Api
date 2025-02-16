import React from "react";

import Hearderimg from "../header/hearderimg.jsx";
import Center from "../center/center.jsx";
import Animations from "../animation/animation.jsx";

import FooterForm from "../FooterForm/FooterForm.jsx";
export default function AllDataFrontent() {

  return (
    <>
   
          <Animations />
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <Hearderimg />
              <Center />
              <FooterForm />
              <Animations />
            </div>
          </div>
        </div>
     
    </>
  );
}
