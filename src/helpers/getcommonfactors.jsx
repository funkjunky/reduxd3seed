let getCommonFactors = (product) => {
    //TODO: use a generator or something to make this more functional 
    let factors = [];
    for(let x = 2; x <= (product / 2); ++x)
        for(let y = x; y <= (product / 2); ++y)
            if(x * y === +product)
                factors.push({x, y});

    return factors;
};

export default getCommonFactors;
