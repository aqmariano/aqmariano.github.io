// what is the path to the JSON file?
const apiURL = "../hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    console.log(myList.length);
    for (i = 0; i < myList.length; i++) {

    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;
    myImageTag.alt = myList[i].name;

    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;

    let theIconLeftTag = document.createElement("ion-icon");
    theIconLeftTag.name = "navigate-outline";

    let theAddress1Tag =
    document.createElement("p");
    theAddress1Tag.textContent = myList[i].address[0];

    let theAddress2Tag =
    document.createElement("p");
    theAddress2Tag.textContent = myList[i].address[1];

    let theAddress3Tag =
    document.createElement("p");
    theAddress3Tag.textContent = myList[i].address[2];

    let theIconRightTag = document.createElement("ion-icon");
    theIconRightTag.name = "call-outline";

    let thePhoneTag =
    document.createElement("p");
    thePhoneTag.textContent = myList[i].phone;

    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);

    let myInfo1Tag = document.createElement("span");
    myInfo1Tag.appendChild(theAddress1Tag);
    myInfo1Tag.appendChild(theAddress2Tag);
    myInfo1Tag.appendChild(theAddress3Tag);

    let myInfo2Tag = document.createElement("span");
    myInfo2Tag.appendChild(thePhoneTag);

//end of children

    let myIconTag= document.createElement("div");
    myIconTag.appendChild(theIconLeftTag);
    myIconTag.appendChild(myInfo1Tag);
    myIconTag.appendChild(theIconRightTag);
    myIconTag.appendChild(myInfo2Tag);

    let mySectionTag = document.createElement("section");
    mySectionTag.appendChild(myFigureTag);
    mySectionTag.appendChild(myIconTag);

document.getElementById('inventoryWrapper').appendChild(mySectionTag);

}





}); //end of "then" fat arrow function
