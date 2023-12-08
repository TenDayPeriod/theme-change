/*
 * @Description:
 * @Author: Rfan
 * @Date: 2022-07-16 11:50:04
 * @LastEditTime: 2022-07-16 17:28:30
 */
import { Button } from 'antd';
import { FullscreenOutlined } from '@ant-design/icons';

function Favourite() {
  return (
    <>
      <Button shape="circle" size="small" icon={<FullscreenOutlined />} ghost />
    </>
  );
}

export default Favourite;
