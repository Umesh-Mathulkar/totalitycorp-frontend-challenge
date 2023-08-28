import React from 'react';
import Card from '../../components/ui/Card';
import { ICategory } from '../../components/interfaces/ProductInterfaces';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  data: ICategory[];
}

const Categories = ({ data }: CategoriesProps) => {
  return (
    <Card>
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex justify-center">
          {data.map(({ name, image }, index) => (
            <div key={index} className="text-center flex flex-col items-center">
                <Link to={`/product-list/${name}`}>
              <div className="flex justify-center h-[90px] w-[60px] items-center">
                <img src={image} alt={name} />
              </div>
              <p className="text-[18px] capitlised font-normal mt-2">{name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};


export default Categories;
