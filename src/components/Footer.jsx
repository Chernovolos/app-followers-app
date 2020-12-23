// outsource dependencies
import React from "react";
import {Col, Row} from "antd";

// local dependencies
import vFacebook from "../asset/img/Vector-facebook.svg";
import vInstagram from "../asset/img/Vector-instagram.svg";
import vIn from "../asset/img/Vector-in.svg";

const Footer = () => {
    return (
        <div className="container">
            <Row middle="lg">
                <Col>
                    <p className="footer-description">2020 © Founders Lair</p>
                    <div className="custom-icon-footer">
                        <span>
                            <img src={vIn}/>
                        </span>
                        <span>
                            <img src={vFacebook}/>
                        </span>
                        <span>
                            <img src={vInstagram}/>
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;
