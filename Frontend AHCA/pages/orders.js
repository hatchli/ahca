import Link from "next/link";
import OrderList from "../components/OrderList";
import PleaseSignIn from "../components/PleaseSignIn";

const OrderPage = props => {
  return (
    <div>
      <PleaseSignIn>
        <OrderList />
      </PleaseSignIn>
    </div>
  );
};

export default OrderPage;
