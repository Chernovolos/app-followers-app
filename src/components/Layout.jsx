// outsource dependencies
import React from "react";
import { Layout as AntdLayout } from 'antd';
import {Col, Row} from "antd";

// local dependencies
import Preloader from "./Preloader/Preloader.jsx";
import FollowersPage from "./FollowersPage/FollowersPage.jsx";

const Layout = (props) => {
    return (
        <>
            <AntdLayout>
                <AntdLayout.Header>Header</AntdLayout.Header>
                <AntdLayout.Content>
                    <div className="container">
                        <FollowersPage/>
                    </div>
                </AntdLayout.Content>
                <AntdLayout.Footer>Footer</AntdLayout.Footer>
            </AntdLayout>


            {/*<div className="container">*/}
            {/*    <Row align="center">*/}
            {/*        <Col span={8} align="center">*/}
            {/*            <Preloader/>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</div>*/}
        </>
    )
};

export default Layout;
