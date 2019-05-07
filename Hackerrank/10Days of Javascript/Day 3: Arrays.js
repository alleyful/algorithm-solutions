function getSecondLargest(nums) {
   
    const result = nums.reduce((target, num) => {
        num > target[1] && (
            num > target[0] ? (
                target[1] = target[0],
                target[0] = num
            ) : !(num === target[0]) && (target[1] = num)            
        )

        return target;
    }, [0, 0])

    return result[1];
}
