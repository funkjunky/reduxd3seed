import { colorsArray } from '../constants/colorsarray.jsx';

let getCommonFactors = (products) => products.reduce((carry, product, index) => {
        for(let i = 2; i <= (product.product / 2); ++i)
            for(let y = i; y <= (product.product / 2); ++y)
                if(i * y === +product.product)
                    carry.push({x: i, y: y, color: colorsArray[index], text: product.product});

        return carry;
}, []);

export default getCommonFactors;
