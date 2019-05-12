function modifyArray(nums) {
    return nums.reduce((target, num) => {
        target.push(
            num % 2 === 0
                ? num * 2
                : num * 3
        );
        return target;
    },[])
}
