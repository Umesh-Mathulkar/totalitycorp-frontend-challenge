import { createApiUrl } from "./baseServices";

export const addToCartApi = createApiUrl('cart/add');

export const fetchCartApi = createApiUrl('cart/fetch')

export const deleteCartProductApi = createApiUrl('cart/remove');

export const updateCartProductQuantityApi = createApiUrl('cart/update')