import React, { useEffect, useState } from "react";
import Carousel from "../../components/ui/Carousel";
import Categories from "./Categories";
import TopElectronics from "./TopElectronics";
import TopFashion from "./TopFashion";
import { ICategory } from "../../components/interfaces/ProductInterfaces";
import { fetchProducts } from "../../store/thunks/product/productThunks";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Loading from "../../components/ui/Loading";
import { carouselImages } from "../../fake/imageUrl";

const Home = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    dispatch(fetchProducts())
      .then(() => setIsLoading(false)) // Set loading to false after data is fetched
      .catch(() => setIsLoading(false)); // Set loading to false on error
  }, [dispatch]);

  const products = useAppSelector((state) => state.product);
  const categories: ICategory[] = Object.entries(
    products.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = item.image;
      }
      return acc;
    }, {} as Record<string, string>)
  ).map(([name, image]) => ({ name, image }));

  const electronics = products.filter((item) => item.category === "electronics");
  const fashion = products.filter(
    (item) =>
      item.category === "women's clothing" || item.category === "men's clothing"
  );

  return (
    <div>
      <Carousel images={carouselImages} />
      <Loading loading={isLoading}>
        <Categories data={categories} />
        <TopElectronics data={electronics} />
        <TopFashion data={fashion} />
      </Loading>
    </div>
  );
};

export default Home;
