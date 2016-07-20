const product = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                id: action.id,
                product: action.product,
            };
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                product: action.product,
            };
        default:
            return state;
    }
}

const products = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                product(undefined, action)
            ];
        case 'UPDATE_PRODUCT':
            console.log('updating product...', action);
            return state.map(_product => {
                if(_product.id === action.id)
                    return product(_product, action);

                return _product;
            });
        default:
            return state;
    }
}

export default products;
