import Affiliate from './content/affiliate/showAffiliate';
import EditAccount from './content/EditAccont.jsx';
import EditPassword from './content/EditPassword';
import PurchaseOrder from './content/PurchaseOrder';
import DrawalMoney from './content/affiliate/DrawalMoney';
import Home from '../home/index';

const routerAccount = [
  {path: '/account/affiliate', exact: true, Component: Affiliate},
  {path: '/account/editAccount', exact: true, Component: EditAccount},
  {path: '/account/editPassword', exact: true, Component: EditPassword},
  {path: '/account/purchaseOder', exact: true, Component: PurchaseOrder},
  {path: '/account', exact: true, Component: DrawalMoney},
  {path: '/', exact: true, Component: Home},
]

export default routerAccount
