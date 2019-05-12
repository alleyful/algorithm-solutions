function getMaxLessThanK(n, k) {
    let max = 0;

    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let bitwiseAnd = a & b;
            (bitwiseAnd < k && max < bitwiseAnd) && (max = bitwiseAnd)
        }
    }

    return max;
}
