import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Header from '../../components/ui/Header';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { addToCart } from '../../store/thunks/Cart/cartThunks';
import { IProductState } from '../../components/interfaces/states/ProductState';
import Toast from '../../components/ui/Toast';

interface ITopProductsByCategoriesProps {
  products: IProductState[];
  category: string;
}

const TopProductsByCategories: React.FC<ITopProductsByCategoriesProps> = ({ products, category }) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.loginResponse?._id);

  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (productId: number) => {
    try {
      setIsLoading(true);
      await dispatch(addToCart({ userId, productId, quantity: 1 }));
      setToastMessage('Item added to cart');
      setToastType('success');
    } catch (error) {
      setToastMessage('Error adding item to cart');
      setToastType('error');
    } finally {
      setIsToastVisible(true);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Header>Best of {category}</Header>
        <div className="w-full grid grid-cols-1 md:grid-cols-6">
          {products.map((item, index) => (
            <Card key={index} className="md:h-[400px]">
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
              <div className="text-center">
                <Button loading={isLoading} handleSubmit={() => handleSubmit(item.id)}>
                  Shop Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
      {isToastVisible && (
        <Toast message={toastMessage} type={toastType} onClose={() => setIsToastVisible(false)} />
      )}
    </div>
  );
};

export default TopProductsByCategories;
