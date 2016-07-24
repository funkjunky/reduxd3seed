import * as Types from '../constants/actiontypes.jsx';

const product = (state, action) => {
    switch (action.type) {
        case Types.ADD_PRODUCT:
            return {
                id: action.id,
                product: action.product,
            };
        case Types.UPDATE_PRODUCT:
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
        case Types.ADD_PRODUCT:
            return [
                ...state,
                product(undefined, action)
            ];
        case Types.UPDATE_PRODUCT:
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
