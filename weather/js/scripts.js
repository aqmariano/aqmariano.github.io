const d = new Date();

const todayDayNumber = d.getDay();
console.log(todayDayNumber);

let forecastDayNumber = todayDayNumber;

console.log(forecastDayNumber);

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL="//api.openweathermap.org/data/2.5/forecast?zip=84003,us&appid=c01f43538fe87f20cc1cb03b0f82afda&units=imperial";

fetch (apiURL)
.then((response) => response.json())
.then ((weatherInfo) => {
    console.log(weatherInfo);

document.getElementById('place').innerHTML=weatherInfo.city.name;

let mylist= weatherInfo.list;

for (i=0; i<mylist.length;i++) {

    var time=mylist[i].dt_txt;
    if (time.includes('18:00:00')){

        forecastDayNumber +=1;
        if(forecastDayNumber===7){forecastDayNumber=0}

        let theDayName = document.createElement("span");
        theDayName.textContent = weekday[forecastDayNumber];

        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp +"\xB0";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/wn/" + iconcode + ".png";
        let theIcon = document.createElement("img");
        theIcon.src = iconPath;

        let theDay = document.createElement("section");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

document.getElementById('weatherforecast').appendChild(theDay);

}//end if
}//end for
});//end of "then" fat arrow function
