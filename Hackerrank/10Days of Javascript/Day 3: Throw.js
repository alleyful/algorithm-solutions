function isPositive(a) {
    let message = 'YES';
    if (a <= 0) throw { message: `${a < 0 ? 'Negative' : 'Zero'} Error` };

    return message;
    //return a > 0 ? 'YES' : `${a < 0 ? 'Negative' : 'Zero'} Error`;
}
