// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById('missionTarget').innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[index].name}</li>
                    <li>Diameter: ${json[index].diameter}</li>
                    <li>Star: ${json[index].star}</li>
                    <li>Distance from Earth: ${json[index].distance}</li>
                    <li>Number of Moons: ${json[index].moons}</li>
                </ol>
                <img src="${json[index].image}">`;
   
}

function validateInput(testInput) {
    window.addEventListener("load", function() {
        let form = document.querySelector("form");
        form.addEventListener("formSubmit", function(event) {
           let pilotNameInput = document.querySelector("input[name=pilotName]");
           let copilotNameInput = document.querySelector("input[name=copilotName]");
           let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
           let cargoMassInput = document.querySelector("input[name=cargoMass");
           if (pilotNameInput.value === "" || copilotNameInput.value === "" || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value) ) {
              alert("All fields are required!");
              // stop the form submission
              event.preventDefault();
           } 
        });
     });
}

let fuelReady = false;
let cargoReady = false;
//let crewReady = false;
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   validateInput();

   //if (pilotNameInput.value === "" && copilotNameInput === "")
   document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotNameInput.value} Ready`;
   document.getElementById('copilotStatus').innerHTML = `Copilot ${copilotNameInput.value} Ready`;

   if (fuelLevelInput.value < 10000) {
    document.getElementById('faultyItems').style.visibility = "visible"
    document.getElementById('fuelStatus').innerHTML = `There is not enough fuel for the journey`;
    document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch!';
    document.getElementById('launchStatus').style.color= "red";
    fuelReady = false;
    
   } else {
    fuelReady = true
   }

   if (cargoMassInput.value > 10000) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById('cargoStatus').innerHTML = `There is too much mass for the shuttle to take off.`
    document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch!';
    document.getElementById('launchStatus').style.color= "red";
    cargoReady = false;
        
   } else {
    cargoReady = true;
   }

   if (fuelReady && cargoReady) {
    document.getElementById('faultyItems').style.visibility = 'visible';
    document.getElementById('launchStatus').innerHTML = `Shuttle is ready for launch`;
    document.getElementById('launchStatus').style.color = 'green';
   }
}

async function myFetch() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then( function(json){
            const div = document.getElementById('missionTarget');
        })
        //const fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json");
        //fetchPromise.then( function(response){}
            //
        //})
    });

    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
};

function pickPlanet(planets) {
        let index = Math.floor(Math.random() * json.length);
        console.log(json[index].name);
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;