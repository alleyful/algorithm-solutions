function getCount(objects) {
    return objects.reduce((target, obj) => {
        obj.x === obj.y && target++;

        return target;
    }, 0)
}
