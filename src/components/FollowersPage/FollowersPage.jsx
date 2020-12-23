// outsource dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Table, Row, Col, Button} from "antd";
import {getFollowersList, tableChangePage} from "../../actions/followers";
import isEqual from "lodash/isEqual";

const FollowersPage = () => {
    const dispatch = useDispatch();

    useEffect((username, currentPage, amount) => {
        // TODO: rename getFollowersList action to initialize
       dispatch(getFollowersList(username, currentPage, amount));
       // dispatch(getFollowerSearch(followersName, target_user ))
    }, []);

    const followersList = useSelector(state => state.followersPage.followers, isEqual);
    const preloader = useSelector(state => state.followersPage.preloader, isEqual);
    const totalFollowers = useSelector(state => state.followersPage.total, isEqual);

    const currentPage = useSelector(state => state.followersPage.currentPage, isEqual);
    const amount = useSelector(state => state.followersPage.amount, isEqual);
    const username = useSelector(state => state.followersPage.username, isEqual);

    const handleTableChange = (pagination) => {
        dispatch(tableChangePage(pagination));
        dispatch(getFollowersList(pagination));
    }

    const data = [];
    for(let i = 0; i < followersList.length; i++) {
        data.push({
            key: followersList[i].id,
            avatar: followersList[i].avatar_url,
            userName: followersList[i].login,
            repository: followersList[i].html_url
        })
    }

    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            width: '25%',
            render: avatar => <img alt={avatar} src={avatar} className="avatar-follower"/>
        },
        {
            title: 'Username',
            dataIndex: 'userName',
            width: '25%',
        },
        {
            title: 'Repository',
            dataIndex: 'repository',
            render: repository => <Button type="link">Visit</Button>,
            width: '25%',
        },
    ];
    console.log("RERENDER", totalFollowers);

    return (
        <div className="container">
            <Row justify="center">
                <Col  xs={24} sm={20} md={15} lg={14} >
                    <Table
                        className="custom-table"
                        columns={columns}
                        loading={preloader}
                        pagination={
                            {
                                current: currentPage,
                                pageSize: amount,
                                position: ["bottomCenter"],
                                total: totalFollowers,
                                showLessItems: true,
                                showQuickJumper: false,
                                showSizeChanger: false,
                            }
                        }
                        dataSource={data}
                        onChange={handleTableChange}
                    />
                </Col>
            </Row>
        </div>
    )
};

export default FollowersPage;
