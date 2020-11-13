import { BackTop } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';

export default function BackToTop() {
    return (
        <BackTop>
            <div className="btn btn-dark p-1 ml-auto">
                <UpCircleOutlined className="p-2" />
            </div>
        </BackTop>
    )
}