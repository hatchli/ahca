import Link from "next/link";
import Order from "../components/Order";
import PleaseSignIn from "../components/PleaseSignIn";

const order = props => {
  return (
    <div>
      <PleaseSignIn>
        <Order id={props.query.id} />
      </PleaseSignIn>
    </div>
  );
};

export default order;
