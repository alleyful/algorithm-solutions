function sides(literals, ...expressions) {
    const value = [...expressions]
    const p = value[1];
    const a = value[0];
    let calSqrt = (p, a) => Math.sqrt(Math.pow(p, 2) - (16 * a));

    return value.reduce((target, item, index) => {
        target.push(
            (index % 2 === 0 
                ? p - calSqrt(p, a)
                : p + calSqrt(p, a))/4
        );

        return target;
    },[])   
}
