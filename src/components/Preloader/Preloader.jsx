import React from 'react';
import {Space, Spin} from 'antd';

export default ((show) => {
    return (
        show ?
            <Space size="middle">
                <Spin size="large" />
            </Space> :
            null
    )
})
