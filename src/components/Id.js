import React from "react";
import './Styles/Id.css'
import Logo from './Img/Home-img.png';
import Klu from './Img/Logo.png';
import Sign from './Img/Sign.png';
import Barcode from './Img/Barcode.jpg';
export default function Id() {
  return (
    <div>
      <div className="heading"><h1>KL University ID Card</h1></div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="containerrj">
                <div className="pic">
                  <img src={Logo} alt="profile pic" />
                  <div className="main">
                    <li>RAJGOPAL HOTA</li>
                    <li>CSE</li>
                    <li>2100032351</li>
                  </div>
                  <div className="side">
                    <img src={Klu} alt=""/>
                  </div>
                  <div className="cont">
                    <li>Student ID</li>
                    <li className="stid">2100032351</li>
                    <li className="yr">2021-2025</li>
                  </div>
                  <div className="signature">
                    <img src={Sign} alt=""/>
                  </div>
                  <div className="sign">
                    <li>Issuing Authority</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="container1">
                <div className="address">
                  <h3>
                    <b>
                      Adress:flat.No: 135-5,Yadagiri Gutta, Hyderabad - 508115,
                      <br />
                      Telangana
                      <br />
                      Emergency Contact No :7672075313,Blood Group : O+
                      <br />
                      Email: 2100032351@kluniversity.in
                    </b>
                  </h3>
                </div>
                <div className="part"></div>
                <div className="coladd">
                  <h3>
                    If Found, Please return to:
                    <br />
                    KL Deemed to be University, Greenfields, Vaddeswaram, Guntur
                    District - 522502
                    <br />
                    Phone No : 0863-2399999
                    <br />
                    www.kluniversity.in
                  </h3>
                </div>
                <div className="bar">
                  <h4 className="txt">
                    <b>*2100032351*</b>
                  </h4>
                </div>
                <div className="barcode">
                  <img src={Barcode} alt=''/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
