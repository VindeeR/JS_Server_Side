var rect = require('./rectangle')

function solveRect(l, b) {
    console.log("solve for reactangule with l = " + l + " and with b = " + b);

    rect(l, b, (err, rectangule) => {
        if (err) {
            console.log("Error: ", err.message)
        }
        else {
            console.log("The area of the rectangle of dimensions l = " + l + " an b = " + b +
                " is " + rectangule.area());
            console.log("The perimeter of the rectangle of dimensions l = " + l + " an b = " + b +
                " is " + rectangule.perimeter());
        }
    });
    console.log("This statment is after the call to rect()");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);