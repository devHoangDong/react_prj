import Account from './components/body/account/index';
import Home from './components/body/home/index';
import Cart from './components/body/cart/index'
import Dathang from './components/dathang/index'
import ListItem from './components/body/home/ListItem';
const router = [
  {path: '/', exact: true, Component: Home},
  {path: '/account', exact: true, Component: Account},
  {path: '/cart', exact: false, Component: Cart},
  {path: '/dathang', exact: false, Component: Dathang},
  {path: '/sanpham', exact: false, Component: ListItem},
]

export default router
