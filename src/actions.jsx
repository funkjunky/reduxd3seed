let nextProductId = 0;

export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        id: ++nextProductId,
        product,
    };
}
