import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import FilterSidebar from './FilterSidebar';
import Products from './Products';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { fetchProducts } from '../../store/thunks/product/productThunks';
import { IProduct, ICategory } from '../../components/interfaces/ProductInterfaces'; // Import your product and category interfaces
import { IProductState } from '../../components/interfaces/states/ProductState';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const allProducts = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const { category } = useParams();
  const initialSelectedCategories = category ? [category] : [];
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialSelectedCategories);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedMinPrice, setSelectedMinPrice] = useState<number>(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number>(0);



  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories: string[] = Array.from(
    new Set(allProducts.map((item: IProductState) => item.category))
  );

  // Filter the products based on selected categories, rating, and price range
  const filteredProducts = allProducts.filter((product: IProductState) => {
    const categoryMatches = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const ratingMatches = selectedRating === null || product.rating.rate >= selectedRating;
    const priceMatches = (selectedMinPrice === 0 || product.price >= selectedMinPrice) &&
      (selectedMaxPrice === 0 || product.price <= selectedMaxPrice);
    return categoryMatches && ratingMatches && priceMatches;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-6">
      <div className="col-span-2">
        <Card>
          <FilterSidebar
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            selectedMinPrice={selectedMinPrice}
            setSelectedMinPrice={setSelectedMinPrice}
            selectedMaxPrice={selectedMaxPrice}
            setSelectedMaxPrice={setSelectedMaxPrice}
          />
        </Card>
      </div>
      <div className="col-span-4">
   
          <Products filteredProducts={filteredProducts} />
      
      </div>
    </div>
  );
}

export default ProductList;
