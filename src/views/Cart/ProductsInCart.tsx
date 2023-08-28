import React, { useEffect, useState } from 'react';
import Card from '../../components/ui/Card';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import {
  deleteCart,
  fetchCartItems,
  updateCartProductQuantity,
} from '../../store/thunks/Cart/cartThunks';
import { IProductState } from '../../components/interfaces/states/ProductState';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import { FaTrashAlt } from 'react-icons/fa';
import Toast from '../../components/ui/Toast'; // Import the Toast component

interface IproductsInCartProps {
  data: IProductState[];
}

const ProductsInCart = ({ data }: IproductsInCartProps) => {
  const userId = useAppSelector((state) => state.auth.loginResponse?._id);
  const dispatch = useAppDispatch();

  const [productQuantities, setProductQuantities] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const initialQuantities: { [key: number]: number } = {};
    data.forEach((item) => {
      initialQuantities[item.id] = item.quantity || 0;
    });
    setProductQuantities(initialQuantities);
  }, [data]);

  const handleIncrement = async (productId: number) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));

    await dispatch(updateCartProductQuantity({
      userId: userId!,
      productId: productId,
      quantity: productQuantities[productId] + 1,
    }));

    await dispatch(fetchCartItems({ userId }));
  };

  const handleDecrement = async (productId: number) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));

    await dispatch(updateCartProductQuantity({
      userId: userId!,
      productId: productId,
      quantity: Math.max(productQuantities[productId] - 1, 0),
    }));

    await dispatch(fetchCartItems({ userId }));
  };

  const handleDelete = async (productId: number) => {
    const payload = {
      userId: userId!,
      productId: productId,
    };

    try {
      await dispatch(deleteCart(payload));
      setToastMessage('Item removed from cart');
      setToastType('success');
    } catch (error) {
      setToastMessage('Error removing item from cart');
      setToastType('error');
    } finally {
      setIsToastVisible(true);
      await dispatch(fetchCartItems({ userId }));
    }
  };

  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  return (
    <div>
      <Card className='min-h-screen'>
        <Header>Cart</Header>
        {data.length === 0 ? (
          <p className="text-center text-[30px] mt-4 text-gray-600">No products in cart.</p>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-3">
            {data.map((item, index) => (
              <Card key={item.id} className="md:h-[400px] relative">
                <div className="flex justify-end absolute top-2 right-2">
                  <Button color="red" handleSubmit={() => handleDelete(item.id)}>
                    <FaTrashAlt />
                  </Button>
                </div>
                <div className="flex justify-center md:h-[100px] p-1">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="md:h-[140px]">
                  <p className="text-center">{item.title}</p>
                </div>
                <div className="text-center">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-sm inline-block mb-2">
                    ₹{item.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="bg-gray-300 px-2 py-1 rounded-full focus:outline-none"
                  >
                    -
                  </button>
                  <span className="text-xl">{productQuantities[item.id] || 0}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="bg-gray-300 px-2 py-1 rounded-full focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Card>
      {isToastVisible && (
        <Toast message={toastMessage} type={toastType} onClose={() => setIsToastVisible(false)} />
      )}
    </div>
  );
};

export default ProductsInCart;
