import React from 'react';
import ProductsByFilter from './ProductsByFilter';
import { IProductState } from '../../components/interfaces/states/ProductState';


interface IProductsProps {
  filteredProducts: IProductState[]; 
}

const Products = ({ filteredProducts }: IProductsProps) => {
  return (
    <div>
      {/* Render the filtered products */}
      <ProductsByFilter products={filteredProducts} category='l' />
    </div>
  );
};

export default Products;
