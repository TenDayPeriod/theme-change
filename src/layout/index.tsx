/*
 * @Description: layout 主页面
 * @Author: Rfan
 * @version: v1.0.0
 * @Date: 2022-01-13 10:21:25
 * @LastEditTime: 2023-06-28 11:24:14
 */

import classNames from 'classnames/bind';
import { Layout } from 'antd';
import LayoutHeader from './components/Header';
import Sidebar from './components/Sidebar';
import styles from './styles/index.module.scss';
import React from 'react';
const cx = classNames.bind(styles);

const { Content } = Layout;

export interface ILayoutProps {
  onlyHeader?: boolean;
  children?: React.ReactNode;
}

const LayoutMain = (props: ILayoutProps) => {
  const { onlyHeader, children } = props;

  return (
    <Layout className={cx('app-wrapper')}>
      <LayoutHeader />
      <Layout className="flex-row">
        {!onlyHeader && <Sidebar />}
        <Layout>
          {/* sub title */}
          {/* {!onlyHeader && ( */}
          {/*  <div className={cx('sub-header')}> */}
          {/*    <TagsView className={cx('sub-header__middle')} /> */}
          {/*  </div> */}
          {/* )} */}
          <Content className="layout-page-content">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutMain;
