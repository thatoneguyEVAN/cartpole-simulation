/**
 * Document manipulation
 */
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





