/*
 * @Description:
 * @Author: Rfan
 * @Date: 2022-07-16 11:12:30
 * @LastEditTime: 2022-07-16 17:29:04
 */

import cs from 'classnames';
import classNames from 'classnames/bind';
import styles from '@/layout/styles/header.module.scss';

const cx = classNames.bind(styles);

const Logo = () => {
  return (
    <div
      className={cs(
        'flex',
        'justify-center',
        'items-center',
        'w-[200px]',
        'ml-[-50px]',
        'px-4',
        cx('logo-wrapper')
      )}
    >
      <div className={cx('title')}>系统</div>
    </div>
  );
};

export default Logo;
