//TODO: encapsulate the id incrementer
let nextProductId = 0;

export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        id: ++nextProductId,
        product,
    };
}

export const updateProduct = (product, index) => {
    return {
        type: 'UPDATE_PRODUCT',
        id: index,
        product,
    };
}
