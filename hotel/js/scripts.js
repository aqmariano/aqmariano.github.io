// what is the path to the JSON file?
const APIURL = "../hoteldata.json";

//Go fetch it and then wait for a response.
fetch(APIURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    let myImageTag = document.createElement("img");
    myImageTag.src = myList[0].photo;

    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[0].name;

    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);

    document.getElementById('inventoryWrapper').appendChild(myImageTag);







}); //end of "then" fat arrow function
