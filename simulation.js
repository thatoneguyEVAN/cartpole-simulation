/**
 * Simulation settings
 */
let Engine          = Matter.Engine,
    Render          = Matter.Render,
    Runner          = Matter.Runner,
    Constraint      = Matter.Constraint,
    Mouse           = Matter.Mouse,
    Composite       = Matter.Composite,
    Body            = Matter.Body,
    Bodies          = Matter.Bodies,
    Vector          = Matter.Vector,
    Events          = Matter.Events;

const WIDTH = 800;
const HEIGHT = 600
const GROUND = 0;
const CART = 1;
const CARTBOB = 2;

let engine,
    world,
    render,
    runner;

let bodies = [];

// ground info
let groundWidth = WIDTH;
let groundHeight = 50;
let groundX = WIDTH / 2;
let groundY = HEIGHT - groundHeight / 2

// cart info
let cartWidth = 100;
let cartHeight = 30;
let cartX = WIDTH / 2;
let cartY = HEIGHT - groundHeight - cartHeight / 2

// cartBob info
let cartBobDiameter = 10;
let cartBobRestraintLength = 100;
let cartBobX = WIDTH / 2;
let cartBobY = HEIGHT - groundHeight - cartHeight - cartBobRestraintLength - cartBobDiameter / 2
let cartBobDesierdAngle = -90;


/**
 * PID settings
 */
const KP = 1;
const KI = 2;
const KD = 3;
let integral = 0;
let intError = 0;


/**
 * Listen for page load to start the setup process
 */
document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {
        setUpMatterJs();  
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        updateAllSliderValues();
    }

});


/**
 * setUpMatterJs
 */
let setUpMatterJs = () => {

    // create engine
    engine = Engine.create();
    world = engine.world;

    // create renderer
    render = Render.create({
        element: document.getElementById("simulation"),
        engine: engine,
        options: {
            wireframes: false,
            background: "#EEEEEE",
            width: WIDTH,
            height: HEIGHT
        }
    });

    bodies[GROUND] = Bodies.rectangle(groundX,groundY,groundWidth,groundHeight,{
        isStatic: true,
        render:{
            fillStyle: "#CCCCCC"
        }
    });

    bodies[CART] = Bodies.rectangle(cartX,cartY,cartWidth,cartHeight,{
        render:{
            fillStyle: "#AAAAAA",
            strokeStyle: "#000000",
            lineWidth: "4",
        }
    });

    bodies[CARTBOB] = Bodies.circle(cartBobX,cartBobY,cartBobDiameter,{
        render:{
            fillStyle: "#AAAAAA",
            strokeStyle: "#000000",
            lineWidth: "4",
        }
    });

    let c = Constraint.create({
        
        bodyA: bodies[CART],
        bodyB: bodies[CARTBOB],
        stiffness: 1,
        length: cartBobRestraintLength

    });

    Composite.add(world, [bodies[GROUND], bodies[CART], bodies[CARTBOB], c ]);

    // run renderer
    Render.run(render);

    // create runner
    runner = Runner.create();
    Runner.run(runner, engine);

    // hook into "beforeRender" to process pid control before the next render
    Events.on(render, "beforeRender", simulationLoop)

}


/**
 * Simulation loop
 */
let simulationLoop = () =>{
    
    let Kp = getSliderValue("kp_slider");
    let Ki = getSliderValue("ki_slider");
    let Kd = getSliderValue("kd_slider");
    let dt = getSliderValue("dt_slider");

    // calulate error
    let vecA = bodies[CART].position;
    let vecB = bodies[CARTBOB].position
    let currentAngle = Vector.angle(vecA, vecB) * (180/Math.PI);
    let error = currentAngle - cartBobDesierdAngle;

    // calulate P
    let p = Kp * error * dt;
    
    // calulate I
    intError = intError + error*dt;
    let i = Ki * intError;

    // calulate I
    let d = Kd * -bodies[CART].velocity.x;

    // assemble PID
    let pid = p + i + d;

    // create vector from pid
    let force = Vector.create(pid, 0);

    // apply force to cart
    Body.applyForce(bodies[CART], bodies[CART].position, force);

    // Update the equation boxes
    let boxValues = {
        error,
        intError,
        de_dt: -bodies[CART].velocity.x,
    }
    updateBoxes(boxValues);
    
}

/**
 * Gets the value of a slider
 * 
 * @param {String} Slider DOM element id 
 * @returns {Number} The value of the slider
 */
let getSliderValue = (slider) => {
    return document.getElementById(slider).value;
}


/**
 * 
 * @param {*} boxValues 
 */
let updateBoxes = (boxValues) => {
    for(const [key, value] of Object.entries(boxValues)){
        if(key == "error"){
            document.getElementById("error_value").innerHTML = value.toFixed(3);
        } else if(key == "intError"){
            document.getElementById("int_error_value").innerHTML = value.toFixed(3);
        } else if(key == "de_dt"){
            document.getElementById("de_dt_value").innerHTML = value.toFixed(3);
        }
    }
}




/**
 * keyboard input
 */

 window.addEventListener('keydown', (event) =>{

    if(event.key == "ArrowLeft"){
        Body.applyForce(bodies[CARTBOB], bodies[CARTBOB].position, Vector.create(-0.005,0));
    } else if(event.key == "ArrowRight"){
        Body.applyForce(bodies[CARTBOB], bodies[CARTBOB].position, Vector.create(0.005,0));
    }
    
})







