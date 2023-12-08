/*
 * @Description:
 * @Author: Rfan
 * @Date: 2022-07-16 11:48:12
 * @LastEditTime: 2022-07-16 17:28:26
 */
import { Badge, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

function Favourite() {
  return (
    <>
      <Badge dot={true}>
        <Button shape="circle" size="small" icon={<HeartOutlined />} ghost />
      </Badge>
    </>
  );
}

export default Favourite;
