let w = 1400;
let h = 1400;
let scale = 20;
let rows = (h / scale);
let cols = (w / scale);
let mountains = [];
let fly = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
}

function draw() {
    orbitControl();
    background(0);
    fly += .05;

    let yOff = fly;

    for (let i = 0; i < rows; i++) {
        mountains[i] = [];
        let xOff = 0;
        for (let j = 0; j < cols; j++) {
            mountains[i][j] = map(noise(xOff, yOff), 0, 1, -40, 60);
            xOff += 0.3;
        }
        yOff += 0.3;
    }

    fill(166);
    
    rotateX(PI / 3);
    translate(-w / 2, -h / 2);

    for (let i = 0; i < rows; i++) {
        beginShape(TRIANGLE_STRIP);
        for (let j = 0; j < cols; j++) {
            vertex(j * scale, i * scale, mountains[j][i]);
            vertex(j * scale, (i + 1) * scale, mountains[j][i]);
        }
        endShape();
    }
}
setInterval(setup, 0.10);