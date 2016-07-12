const product = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                id: action.id,
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
        default:
            return state;
    }
}

export default products;
