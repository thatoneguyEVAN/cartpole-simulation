let Engine          = Matter.Engine,
    Render          = Matter.Render,
    Runner          = Matter.Runner,
    MouseConstraint = Matter.MouseConstraint,
    Mouse           = Matter.Mouse,
    Composite       = Matter.Composite,
    Bodies          = Matter.Bodies;

let setUpMaterJs = () => {

    // create engine
    let engine = Engine.create();
    let world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.getElementById("simulation"),
        engine: engine,
        options: {
            wireframes: false,
            background: "#DDDDDD",
            width: 800,
            height: 600
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

}

// listen for the document to be ready. When it is, start the matter.js loading process.
document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        setUpMaterJs();  
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {

        // do some fully loaded things here

        //set defalt slider values
        let value = document.getElementById("kp_slider").value;
        let valueBox = document.getElementById("kp_slider_value");
        valueBox.innerHTML = value;

        value = document.getElementById("ki_slider").value;
        valueBox = document.getElementById("ki_slider_value");
        valueBox.innerHTML = value;

        value = document.getElementById("kd_slider").value;
        valueBox = document.getElementById("kd_slider_value");
        valueBox.innerHTML = value;
        
    }
});

document.getElementById("kp_slider").addEventListener('change', event =>{
    
    let value = document.getElementById("kp_slider").value;
    let valueBox = document.getElementById("kp_slider_value");
    valueBox.innerHTML = value;
});

document.getElementById("ki_slider").addEventListener('change', event =>{
    
    let value = document.getElementById("ki_slider").value;
    let valueBox = document.getElementById("ki_slider_value");
    valueBox.innerHTML = value;
});

document.getElementById("kd_slider").addEventListener('change', event =>{
    
    let value = document.getElementById("kd_slider").value;
    let valueBox = document.getElementById("kd_slider_value");
    valueBox.innerHTML = value;
});
