/*
 * @Description: 侧边主导航
 * @Author: Rfan
 * @Date: 2022-01-15 16:13:29
 * @LastEditTime: 2022-11-17 19:45:32
 */

import { Layout, Menu, Select, Typography } from 'antd';
import classNames from 'classnames/bind';
import styles from '../../styles/sidebar.module.scss';

const cx = classNames.bind(styles);
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <>
      <Sider
        className={cx('layout-slider')}
        theme="light"
        width={220}
        breakpoint="lg"
        trigger={null}
        collapsible
      >
        <div className={`${cx('logo')} flex items-center justify-between`}>
          {/* <UnitSelector /> */}
          <Typography.Text className="pl-6 text-sm" ellipsis>
            功能导航
          </Typography.Text>
        </div>
        <div className="my-4 h-px border-0 bg-gradient-to-r from-[#F6FBFE]/0 via-[#856835] to-[#F6FBFE]/0" />
        <Select
          defaultValue="item-1"
          style={{ width: '200px' }}
          options={[
            { label: '菜单项一', value: 'item-1' }, // 菜单项务必填写 value
            { label: '菜单项二', value: 'item-2' },
            {
              label: '子菜单',
              value: 'submenu'
            }
          ]}
        />
        <Menu
          style={{ width: '200px' }}
          mode="inline"
          items={[
            { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
            { label: '菜单项二', key: 'item-2' },
            {
              label: '子菜单',
              key: 'submenu',
              children: [{ label: '子菜单项', key: 'submenu-item-1' }]
            }
          ]}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
