import React, { useState } from 'react';
import '../../scss/Header.scss';
import { Affix } from 'antd';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const { SubMenu } = Menu;
const Header = () => {
  const [current, setCurrent] = useState('home');
  const listCart = useSelector(store => store.Cart)
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <div className="header">
      <div className="header__logo">
        <div className="logo"></div>
        <p>NewCa</p>
        <p>Phiên bản 29.04.2021</p>
      </div>
      <div className="header__nav"><Link to='/'><i class="fal fa-home"></i>&nbsp;Dashboard</Link></div>
      <div className="header__nav"><Link to='/sanpham'><i class="far fa-store"></i>&nbsp;Sản phẩm</Link></div>
      <div className="header__nav"><Link to='/account'><i class="fal fa-user-circle"></i>&nbsp;Account</Link></div>
      <div className="header__nav">
        <Link to='/cart'><i class="far fa-shopping-cart"></i>&nbsp;Giỏ hàng&nbsp;
                <span className="icon-cart bg-color white total_items">{listCart ? listCart.length : '0'}</span>
        </Link>
      </div>
      {/* default */}
      {/* <Affix offsetTop={0} >
        <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
          <Menu.Item key="home">
            <Link to='/'><i class="fal fa-home"></i>&nbsp;Trang chủ</Link>
          </Menu.Item>
          <Menu.Item key="account">
            <Link to='/account'>Account</Link>
          </Menu.Item>
          <Menu.Item key="cart">
            <Link to='/cart'>Giỏ hàng
                <span className="icon-cart bg-color white total_items">{listCart ? listCart.length : '0'}</span></Link>
          </Menu.Item>
        </Menu>
      </Affix> */}
    </div>
  );
}

export default Header
