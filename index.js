var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

function solveRect(l, b) {
    console.log("solve for reactangule with l = " + l + " and with b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("Dimension should be greatter than zero")
    }
    else {
        console.log("the area of the rectangule is " + rect.area(l, b))
        console.log("the perimeter of the rectangule is " + rect.perimeter(l, b))
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);