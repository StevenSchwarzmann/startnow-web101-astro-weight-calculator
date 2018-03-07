// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

  //using forEach go through each array inside of planets
        //inside forEach function, create an option and set the value and text to planet[0]
planets.forEach(function(p) {
    let planetSelector = document.getElementById('planets');
    let option = document.createElement('option');
    option.value = p[0];
    option.text =  p[0];
    planetSelector.appendChild(option);
});

function calculateWeight(userWeight, planetName) {
    // return userWeight * planets.find(function(item){
    //     return item[0] == planetName;
    //     })[1];
    var objPlanet = planets.find(function(item){
        return item[0] == planetName;
        });
    var multiplier = objPlanet[1];
    return userWeight * multiplier;
}
  
function handleClickEvent() {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
    let userWeight = parseFloat(document.getElementById("user-weight").value);
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    let planetName = document.getElementById("planets").value;
    // 5. Create a variable called result and assign the value of the new calculated weight.
    const result = calculateWeight(userWeight,planetName);
    // 6. Write code to display the message shown in the screenshot.
    document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
  }