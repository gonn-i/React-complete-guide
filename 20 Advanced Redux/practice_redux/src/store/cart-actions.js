import { modalActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch('https://redux-pracice-default-rtdb.firebaseio.com/cart.json');

      if (!res.ok) {
        throw new Error('could not fetch data');
      }

      const data = await res.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      console.log(cartData);
      // 장바구니에 물건이 없을 경우를 대비하여, [] 설정
      dispatch(cartActions.replaceCart({ items: cartData.items || [], totalQuantity: cartData.totalQuantity }));
    } catch (err) {
      console.log(err);
      dispatch(
        modalActions.showNotification({
          status: 'error',
          title: 'Failed!',
          message: 'fail to get cart data :(',
        })
      );
    }
  };
};

export const sendCartData = (cart, totalQuantity) => {
  return async (dispatch) => {
    // 첫 번째 액션: 요청을 시작했다는 알림을 디스패치
    dispatch(
      modalActions.showNotification({
        status: 'pending',
        title: 'sending...',
        message: 'sending cart data!',
      })
    );

    const sendReq = async () => {
      const response = await fetch('https://redux-pracice-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({ items: cart, totalQuantity: totalQuantity }),
      });

      if (!response.ok) {
        throw new Error('sending cart data failed');
      }
    };

    try {
      // 실제 비동기 Http Req
      await sendReq();
      // 두 번째 액션: 요청이 성공했음을 알리는 알림을 디스패치
      dispatch(
        modalActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'send cart data successfully',
        })
      );
    } catch (error) {
      // 세 번째 액션: 요청이 실패했음을 알리는 알림을 디스패치
      dispatch(
        modalActions.showNotification({
          status: 'error',
          title: 'Failed!',
          message: 'fail to send cart data :(',
        })
      );
    }
  };
};
