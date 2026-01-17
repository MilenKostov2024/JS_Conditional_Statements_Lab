function figureArea(type, a, b) {
    let area = 0;

    switch (type) {
        case "square":
            area = a * a;
            break;
        case "rectangle":
            area = a * b;
            break;
        case "circle":
            area = Math.PI * a * a;
            break;
        case "triangle":
            area = (a * b) / 2;
            break;
    }

    console.log(area.toFixed(3));
}

figureArea("rectangle", 5, 10);