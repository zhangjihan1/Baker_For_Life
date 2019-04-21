import React from "react";
import Particles from 'react-particles-js';


const style = {
    zIndex: -1,
    position: "fixed",
    top: 0,
    buttom: 0,
    right: 0,
    left: 0,
    color: "black"
}

const params1 = {
    "particles": {
        "number": {
            "value": 40
        },
        "size": {
            "value": 3
        },
        "line_linked": {
            "color": "#1e88e5"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            }
        }
    },
}

const params2 = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": false
            }
        },
        "color": {
            "value": "#ffcdd2"
        },
        "size": {
            "value": 7,
            "random": true
        },
        "move": {
            "direction": "bottom",
            "out_mode": "out"
        },
        "line_linked": {
            "enable": false
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "remove"
            }
        },
        "modes": {
            "remove": {
                "particles_nb": 10
            }
        }
    }
}

function ParticleBG(props) {
    return (
        <Particles
            params={params2}
            style={style}
        />
    )
}


export default ParticleBG;