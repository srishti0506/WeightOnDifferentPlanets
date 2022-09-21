
function sketch_main1(p) {
    let parent = document.getElementById('1');
    let mercuryTexture;
    let angle=0;
    p.setup = function () {
        p.createCanvas(parent.clientWidth,parent.clientHeight,p.WEBGL);
        p.clear();
        mercuryTexture = p.loadImage('./assets/mercury.jpg');
    }

    p.draw = function () {
        // stuff to draw
        p.noFill();
        p.noStroke();
        p.rotateY(angle);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.ambientLight(50);
        p.texture(mercuryTexture);
        p.sphere(70);
        angle += 0.01;
    }
}

function sketch_main2(p) {
    let parent = document.getElementById('2');
    let venusTexture;
    let angle=0;
    p.setup = function () {
        p.createCanvas(parent.clientWidth,parent.clientHeight,p.WEBGL);
        p.clear();
        venusTexture = p.loadImage('../assets/venus.jpg');
    }

    p.draw = function () {
        // stuff to draw
        p.noFill();
        p.noStroke();
        p.rotateY(angle);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.ambientLight(50);
        p.texture(venusTexture);
        p.sphere(70);
        angle += 0.01;
    }
}
function sketch_main3(p) {
    let parent = document.getElementById('3');
    let earthTexture;
    let angle=0;
    p.setup = function () {
        p.createCanvas(parent.clientWidth,parent.clientHeight,p.WEBGL);
        p.clear();
        earthTexture = p.loadImage('./assets/earth.jpg');
    }

    p.draw = function () {
        // stuff to draw
        p.noFill();
        p.noStroke();
        p.rotateY(angle);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.ambientLight(50);
        p.texture(earthTexture);
        p.sphere(70);
        angle += 0.01;
    }
}
function sketch_main4(p) {
    let parent = document.getElementById('4');
    let marsTexture
    let angle=0;
    p.setup = function () {
        p.createCanvas(parent.clientWidth,parent.clientHeight,p.WEBGL);
        p.clear();
         marsTexture = p.loadImage('./assets/mars.jpg');
    }

    p.draw = function () {
        // stuff to draw
        p.noFill();
        p.noStroke();
        p.rotateY(angle);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.ambientLight(50);
        p.texture(marsTexture);
        p.sphere(70);
        angle += 0.01;
    }
}
function sketch_main5(p) {
    let parent = document.getElementById('5');
    let jupiterTexture
    let angle=0;
    p.setup = function () {
        p.createCanvas(parent.clientWidth,parent.clientHeight,p.WEBGL);
        p.clear();
        jupiterTexture = p.loadImage('./assets/jupiter.jpg');
    }

    p.draw = function () {
        // stuff to draw
        p.noFill();
        p.noStroke();
        p.rotateY(angle);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.ambientLight(50);
        p.texture(jupiterTexture);
        p.sphere(70);
        angle += 0.01;
    }
}
function sketch_main6(p) {
    let parent = document.getElementById('6');
    let saturnTexture;
    let saturnRingTexture; 
    let angle=0;

    p.setup = function () {
        p.createCanvas(parent.clientWidth,parent.clientHeight,p.WEBGL);
        p.clear();
         saturnTexture = p.loadImage('./assets/saturn.jpg');
         saturnRingTexture = p.loadImage('./assets/uranusRing.png');
    }

    p.draw = function () {
        // stuff to draw
        p.noFill();
        p.noStroke();
        p.push()
        p.rotateY(angle);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.ambientLight(50);
        p.texture(saturnTexture);
        p.sphere(70);
        p.pop();
        p.push()
        p.rotateX(p.HALF_PI)
        p.rotateZ(-p.HALF_PI/2)
        p.rotateY(-p.HALF_PI/2)
        p.translate(10,-10,30);
        p.texture(saturnRingTexture);
        p.plane(240);
        p.pop();
        angle += 0.01;
    }
}
function sketch_main7(p) {
    let parent = document.getElementById('7');
    let uranusTexture;
    let uranusRingTexture
    let angle=0;
    p.setup = function () {
        p.createCanvas(parent.clientWidth,parent.clientHeight,p.WEBGL);
        p.clear();
        
        uranusTexture = p.loadImage('./assets/uranus.jpg');
         uranusRingTexture = p.loadImage('./assets/uranusRing.png');
    }

    p.draw = function () {
        // stuff to draw
        p.noFill();
        p.noStroke();
        p.push()
        p.rotateY(angle);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.ambientLight(50);
        p.texture(uranusTexture);
        p.sphere(70);
        p.pop();
        // p.push()
        // p.rotateX(p.HALF_PI)
        // p.rotateZ(-p.HALF_PI/2)
        // p.rotateY(-p.HALF_PI/2)
        // p.translate(10,-10,30);
        // p.texture(uranusRingTexture);
        // p.plane(240);
        // p.pop();
        angle += 0.01;
    }
}
function sketch_main8(p) {
    let parent = document.getElementById('8');
    let neptuneTexture
    let angle=0;
    p.setup = function () {
        p.createCanvas(parent.clientWidth,parent.clientHeight,p.WEBGL);
        p.clear();
         neptuneTexture = p.loadImage('./assets/neptune.jpg');
    }

    p.draw = function () {
        // stuff to draw
        p.noFill();
        p.noStroke();
        p.rotateY(angle);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.pointLight(255,255,255,p.width/2,0,100);
        p.ambientLight(50);
        p.texture(neptuneTexture);
        p.sphere(70);
        angle += 0.01;
      
    }
}


new p5(sketch_main1, '1');
new p5(sketch_main2, '2');
new p5(sketch_main3, '3');
new p5(sketch_main4, '4');
new p5(sketch_main5, '5');
new p5(sketch_main6, '6');
new p5(sketch_main7, '7');
new p5(sketch_main8, '8');