let Engine          = Matter.Engine,
    Render          = Matter.Render,
    Runner          = Matter.Runner,
    MouseConstraint = Matter.MouseConstraint,
    Mouse           = Matter.Mouse,
    Composite       = Matter.Composite,
    Bodies          = Matter.Bodies;

const KP = 1;
const KI = 2;
const KD = 3;

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
        updateAllSliderValues();
        
        
    }
});

document.getElementById("kp_slider").addEventListener('change', event =>{
    
    updateValue(KP);
});

document.getElementById("ki_slider").addEventListener('change', event =>{
    
    updateValue(KI);
});

document.getElementById("kd_slider").addEventListener('change', event =>{
    
    updateValue(KD);
});

let updateAllSliderValues = () => {

    updateValue(KP);
    updateValue(KI);
    updateValue(KD);

}

let updateValue = (gain) => {

    if(gain == KP){
        let value = document.getElementById("kp_slider").value;
        let valueDivs = document.getElementsByClassName("kp_value");
        for(let div of valueDivs){
            div.innerHTML = value;
        }
    } else if (gain == KI){
        value = document.getElementById("ki_slider").value;
        valueDivs = document.getElementsByClassName("ki_value");
        for(let div of valueDivs){
            div.innerHTML = value;
        }
    } else if (gain == KD){
        value = document.getElementById("kd_slider").value;
        valueDivs = document.getElementsByClassName("kd_value");
        for(let div of valueDivs){
            div.innerHTML = value;
        }
    }
      
}

MathJax = {
    loader:{
        load: ["input/tex","output/chtml"],
        packages: ["asciimath2jax.js","MathMenu.js","MathZoom.js","AssistiveMML.js", "a11y/accessibility-menu.js"]
    },
    tex:{
        displayMath: [             // start/end delimiter pairs for display math
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    }
    
}
