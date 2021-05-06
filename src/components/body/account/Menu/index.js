import React from 'react';
import '../../../../scss/menu.scss';
// import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppstoreOutlined,
  DesktopOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Hidden } from '@material-ui/core';

MyMenu.propTypes = {
  myst: PropTypes.object,
}
MyMenu.defaultProps = {
  myst: {
    visibility: 'hidden',
    display: 'none'
  }
}

// const { SubMenu } = Menu;
function MyMenu({url, myst}) {
  console.log(url);

  return (
    <div className="myMenu" style={myst}>
        <div className="leftSidebar">
          <div className="homePage">
          <Link to='/'>
            <p>NEWCA</p>
          </Link>
          </div>
          <hr></hr>
          
          <hr/>
          <div className="menusub userDashboard">
            <div className="dashBoard">
              <Link to={`${url}/`} >
              <i class="fal fa-chart-line"></i>&nbsp;&nbsp;Dashboard
              </Link>
            </div>
          </div>
          <div className="menusub ">
            <div className="menusub-title"><i class="fad fa-user-circle"></i>&nbsp;&nbsp;<p>Thông tin tài khoản</p><span><i class="fal fa-chevron-down"></i></span></div>
            <ul className="menusub-list">
                <li>
                <Link to={`${url}/editAccount`}>Sửa thông tin tài khoản</Link>
                </li>
                <li>
                <Link to={`${url}/editPassword`}>Thay đổi mật khẩu</Link> 
                </li>
              </ul>
          </div>
          <div className="menusub">
            <div className="menusub-title"><i class="fad fa-shopping-cart"></i>&nbsp;&nbsp;<p>Thông tin mua sắm</p><span><i class="fal fa-chevron-down"></i></span></div>
            <ul className="menusub-list">
              <li>
                <Link to={`${url}/purchaseOder`}>Đơn hàng đã mua</Link>
              </li>
            </ul>
          </div>
          <div className="menusub">
            <div className="menusub-title"><i class="fal fa-chart-network"></i>&nbsp;&nbsp;<p>Tiếp thị liên kết</p><span><i class="fal fa-chevron-down"></i></span></div>
            <ul className="menusub-list">
              <li>
                <Link to={`${url}/affiliate`}>Tài khoản affiliate</Link>
              </li>
              <li>
                <a href="#">Cấu hình affiliate</a>
              </li>
            </ul>
          </div>          
        </div>
      {/* <Menu
          mode="inline"
          theme="light"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Thông tin tài khoản">
            <Menu.Item key="5"><Link to={`${url}/editAccount`}>Sửa thông tin tài khoản</Link></Menu.Item>
            <Menu.Item key="6"><Link to={`${url}/editPassword`}>Thay đổi mật khẩu</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Thông Tin mua sắm">
            <Menu.Item key="9"><Link to={`${url}/purchaseOder`}>Đơn hàng đã mua</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<DesktopOutlined />}  title="Tiếp thị liên kết">
            <Menu.Item key="11"><Link to={`${url}/affiliate`}>Tài khoản affiliate</Link></Menu.Item>
            <Menu.Item key="12">Cấu hình affiliate</Menu.Item>
          </SubMenu>
        </Menu> */}
    </div>
  )
}


export default MyMenu;
