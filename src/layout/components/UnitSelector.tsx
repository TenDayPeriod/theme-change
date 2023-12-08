/*
 * @Description: 选择单位组件
 * @Author: Rfan
 * @Date: 2023-06-27 17:49:49
 * @LastEditTime: 2023-06-28 11:23:01
 */

import { Button, Dropdown, Menu, Space, Typography } from 'antd';
import cs from 'classnames';
import classNames from 'classnames/bind';
import { DownOutlined } from '@ant-design/icons';
import styles from '../styles/sidebar.module.scss';
import { ReactElement, useEffect, useState } from 'react';

const cx = classNames.bind(styles);

interface IUnitSelectorProps {
  className?: string;
}
const UnitSelector = (props: IUnitSelectorProps) => {
  const unitList = [
    { id: 1, unitName: '单位1' },
    { id: 2, unitName: '单位2' }
  ];
  // 选中的单位
  const [selectUnit, setSelectUnit] = useState({ id: 1, unitName: '111' });

  const unitMenu: ReactElement = (
    <Menu>
      {unitList.map((unit: any) => (
        <Menu.Item key={unit.id}>
          <Button
            type="text"
            onClick={() => {
              setSelectUnit(unit);
            }}
          >
            {unit.unitName}
          </Button>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className={cx('unit-selector')}>
      <Dropdown overlay={unitMenu} placement="bottomLeft" trigger={['click']} arrow>
        <span style={{ cursor: 'pointer' }}>
          <Space>
            <Typography.Text
              className="unit-name w-[200px] text-gray-200"
              ellipsis={{ tooltip: selectUnit?.unitName }}
            >
              {selectUnit?.unitName}
            </Typography.Text>
            <DownOutlined />
          </Space>
        </span>
      </Dropdown>
    </div>
  );
};

export default UnitSelector;
