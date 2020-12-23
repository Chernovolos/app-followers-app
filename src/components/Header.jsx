// outsource dependencies
import React, { useState, useCallback } from "react";
import { Col, Input, Row } from 'antd';

// local dependencies
import logo from "../asset/img/Logo.svg";
// import search from "../asset/img/Vector-search.svg";
const Header = () => {
    const [searchName, setSearchName ] = useState("");

    const onChange = useCallback(
        ({target}) => {
            setSearchName (target.value);
        }, []
    );

    const onSearch = useCallback(
        (e) => {
            console.log("SEARCH");
        }, []
    );
    return (
        <div className="container">
            <Row align="middle">
                <Col span={5}>
                    <a href="#">
                        <img
                            className="logo"
                            src={logo}
                            alt="logo"
                        />
                    </a>
                </Col>
                <Col span={9}>
                    <Input
                        type="text"
                        value={searchName}
                        placeholder="Search users"
                        onChange={onChange}
                    />
                    <span className="custom-search-icon"
                          onClick={onSearch}/>
                </Col>
            </Row>
        </div>
    )
}

export default Header;
