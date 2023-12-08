/*
 * @Description:
 * @Author: Rfan
 * @Date: 2022-07-16 10:48:05
 * @LastEditTime: 2023-09-27 19:05:40
 * @version:1.2.1
 */

import { Layout } from 'antd';
import classNames from 'classnames/bind';
import Fullscreen from './components/Fullscreen';
import Message from './components/Message';
import UserInfo from './components/UserInfo';
import styles from '../../styles/header.module.scss';
import UnitSelector from '../UnitSelector';
import MainMenu from './components/MainMenu';

const cx = classNames.bind(styles);
const { Header } = Layout;

const LayoutHeader = () => {
  return (
    <Header className={cx('layout-header')}>
      <div className={cx('layout-header-wrap')}>
        <div className={cx('header-left-container')}>
          <div className={cx('left-bevel')}>
            <UnitSelector className={cx('unit')} />
          </div>
        </div>
        <div className={cx('header-center-container')}>
          <MainMenu />
        </div>
        <div className={cx('header-right-container')}>
          <Message />
          <Fullscreen />
          <UserInfo />
        </div>
      </div>
    </Header>
  );
};

export default LayoutHeader;
