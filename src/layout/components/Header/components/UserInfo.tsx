/*
 * @Description:
 * @Author: Rfan
 * @Date: 2022-07-16 16:21:34
 * @LastEditTime: 2023-10-08 15:50:06
 */

import { Dropdown, Menu, Space } from 'antd';
import { ProfileOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import type { ItemType } from 'antd/lib/menu/hooks/useItems';
import type { MenuInfo } from 'rc-menu/lib/interface';
import styles from '../../../styles/header.module.scss';

const cx = classNames.bind(styles);

const menuItemConst = {
  USERINFO: 'userInfo',
  CHANGELOG: 'changelog',
  LOG: 'log',
  LANGUAGE: 'language',
  LOG_OUt: 'logOut'
};

const UserInfo = () => {
  const clickMenu = ({ key }: MenuInfo) => {
    switch (key) {
      case menuItemConst.LANGUAGE: {
        break;
      }
    }
  };

  // TODO: 语言图片暂时只支持中英双语，后期按语言加载图片
  const menuItems: ItemType[] = [
    {
      label: (
        <Space>
          <UserOutlined />
          个人资料
        </Space>
      ),
      key: 'userInfo'
    },
    {
      label: (
        <Space>
          <ProfileOutlined />
          日志
        </Space>
      ),
      key: 'log'
    },
    {
      label: (
        <Space>
          <ProfileOutlined />
          更新日志
        </Space>
      ),
      key: 'changelog'
    },
    {
      label: '退出',
      key: menuItemConst.LOG_OUt
    }
  ];

  return (
    <>
      <Dropdown overlay={<Menu items={menuItems} onClick={clickMenu}></Menu>}>
        <div className={cx('user-dropdown')}>
          <span className={cx('user-dropdown__name')}>
            111
            <DownOutlined />
          </span>
        </div>
      </Dropdown>
    </>
  );
};

export default UserInfo;
