/*
 * @Description:
 * @Author: Rfan
 * @Date: 2022-07-16 11:49:14
 * @LastEditTime: 2022-07-16 17:29:13
 */
import { Badge, Button, Tooltip } from 'antd';
import { BellOutlined } from '@ant-design/icons';

function Message() {
  return (
    <>
      <Tooltip title="消息">
        <Badge count={0} size="small">
          <Button shape="circle" ghost size="small" icon={<BellOutlined />} />
        </Badge>
      </Tooltip>
    </>
  );
}

export default Message;
