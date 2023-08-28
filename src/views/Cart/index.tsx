import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import OrderSummary from "./OrderSummary";
import ProductsInCart from "./ProductsInCart";
import { IProductState } from "../../components/interfaces/states/ProductState";
import { fetchCartItems } from "../../store/thunks/Cart/cartThunks";
import axios from "axios";
import Header from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import Loading from "../../components/ui/Loading";

const Cart = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.auth.loginResponse?._id);
    const [cartProducts, setCartProducts] = useState<IProductState[]>([]);
    const [loadingProducts, setLoadingProducts] = useState(true);

    useEffect(() => {
        if (userId) {
            dispatch(fetchCartItems({ userId }));
        }
    }, [userId, dispatch]);

    const cart = useAppSelector((state) => state.cart.items);

    useEffect(() => {
        if (cart.length > 0) {
            const fetchProducts = async () => {
                try {
                    const productRequests = cart.map((item) =>
                        axios.get<IProductState>(`https://fakestoreapi.com/products/${item.productId}`)
                    );

                    const productResponses = await Promise.all(productRequests);

                    const products = productResponses.map((response, index) => ({
                        ...response.data,
                        quantity: cart[index].quantity,
                    }));

                    setCartProducts(products);
                    setLoadingProducts(false);
                } catch (error) {
                    console.error("Error fetching cart products:", error);
                    setLoadingProducts(false);
                }
            };

            fetchProducts();
        } else {
            setLoadingProducts(false);
        }
    }, [cart]);

    const orderTotal = cartProducts.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return userId ? (
        <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="col-span-3">
                <Loading loading={loadingProducts}>
                    <ProductsInCart data={cartProducts} />
                </Loading>
            </div>
            <div className="col-span-2">
                <OrderSummary data={orderTotal} />
            </div>
        </div>
    ) : (
        <div className="flex justify-center h-screen items-center">
            <Card>
                <Header>Please Login to see the items you added previously</Header>
                <Link className="text-center" to={'/signin'} ><Button>login</Button></Link>
            </Card>
        </div>
    );
};

export default Cart;
