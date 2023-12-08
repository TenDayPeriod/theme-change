/*
 * @Description: 主导航下拉抽屉组件
 * @Author: Rfan
 * @Date: 2022-07-25 09:57:47
 * @LastEditTime: 2022-09-16 16:38:40
 */

import classNames from 'classnames/bind';
import styles from '../../../styles/header.module.scss';
import { Select } from 'antd';

const cx = classNames.bind(styles);

const MainMenu = () => {
  return (
    <div className={cx('main-menu')}>
      <Select bordered={false} value="这里是标题" className={cx('main-menu-select')} />
    </div>
  );
};

export default MainMenu;
