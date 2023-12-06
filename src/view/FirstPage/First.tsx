/*
 * @Description: 动态改变非antd组件样式
 * @Author: Zzt
 * @Date: 2023/12/6
 * @LastEditTime: 16:02
 */
import { Button, Select } from 'antd';
import { Theme } from './dictionary';
import classNames from 'classnames/bind';
import styles from './styles/page.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const FirstPage = () => {
  // 获取页面节点
  const themes: any = document.querySelector('html');
  // 获取本地存储的样式类型
  const [theme, setTheme] = useState(localStorage.getItem('THEME') || Theme.LIGHT);
  themes.className = theme;
  // 切换将状态存到本地防止刷新
  const changeTheme = (theme: string) => {
    localStorage.setItem('THEME', theme);
    setTheme(theme);
    themes.className = theme;
  };

  return (
    <>
      <Select
        value={theme}
        options={[
          { label: '白色主题', value: Theme.LIGHT },
          { label: '黑色主题', value: Theme.DARK },
          { label: '绿色主题', value: Theme.GREEN }
        ]}
        onChange={changeTheme}
      />
      <div className={cx('pageText')}>HI</div>
    </>
  );
};
export default FirstPage;
