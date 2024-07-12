import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const modalHandler = () => {
    dispatch(modalActions.modalToggle());
  };
  return (
    <button className={classes.button} onClick={modalHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
