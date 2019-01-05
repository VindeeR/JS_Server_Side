module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() =>
            callback(new Error("Dimensions should be greatter than zero"),
                null),
            2000);
    }
    else {
        setTimeout(() =>
            callback(null,
                {
                    perimeter: () => (2 * (x + y)),
                    area: () => (x * y),
                    triangle: () => ((x * y) / 2)
                }),
            2000);
    }
}

