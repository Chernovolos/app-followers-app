// outsource dependencies
import React from "react";
import {Layout as AntdLayout} from "antd";

// local dependencies
import FollowersPage from "./FollowersPage/FollowersPage.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = (props) => {

    return (
        <>
            <AntdLayout>
                <AntdLayout.Header className="custom-header">
                    <Header/>
                </AntdLayout.Header>
            </AntdLayout>
            <AntdLayout>
                <AntdLayout.Content className="section-followers">
                    <FollowersPage/>
                </AntdLayout.Content>
            </AntdLayout>
            <AntdLayout>
                <AntdLayout.Footer className="section-footer">
                    <Footer/>
                </AntdLayout.Footer>
            </AntdLayout>
        </>
    )
};

export default Layout;
