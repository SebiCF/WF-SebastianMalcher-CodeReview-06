class solarObject {
    constructor(
        public solarObjectName: string,
        public solarObjectShortInfo: string,
        public solarObjectImg: string,
        public solarObjectLongInfo: string,
        public solarObjectRadius: string,
        public solarObjectMass: string,
        public solarObjectTemperature: string,
        public solarObjectOrbital: string,
        public solarObjectRotation: string, ) { }
    display(i: number) {
        return `<div class="row lead contentCard p-2 pb-3">
                    <div class="col-12 h3 mb-0 mt-1 d-flex align-self-start align-items-center justify-content-center text-light" style="text-shadow: 5px 5px 9px rgba(0, 0, 0,0.5);">${this.solarObjectName}</div>
                    <div class="col-12 col-sm-6 p-1"> ${this.solarObjectShortInfo}</div>
                    <img class="col-6 w-50 img-fluid h-50 my-auto d-none d-sm-block p-1 solarObjectImgSmall"src="${this.solarObjectImg}">
                    <div class="col row mx-auto mt-2 align-self-end">
                        <a href="#detailsContainer" data-objectNumber="${i}"class="btn btn-secondary text-success btn-md active mx-auto p-1 px-3 learnMoreBtn" role="button" aria-pressed="true">Learn more!</a>
                    </div>
                </div>`
    }

    displayDetails() {
        return `<div class="card mb-4 box-shadow">
            <img class="card-img-top mx-auto" src="${this.solarObjectImg}" data-holder-rendered="true" style="height: 350px; width: 35%; display: block;">
            <div class="card-body pt-0 row">
            <div class="col-12 display-3 text-light px-0 pt-0 pb-1"><p class="col text-center p-1 my-0 mx-auto">${this.solarObjectName}</p></div>
            <p class="col-6 card-text lead text-light px-4" style="line-height: 1.5">${this.solarObjectLongInfo}</p>
            <div class="col-6 row card-text lead text-light">
                <div class="col-12 row mb-2 p-0">
                <p class="col-10 col-md-6 col-lg-5 my-0 ml-auto">Equatorial radius:</p><p class="col-12 col-md-8 col-lg-6 my-0 ml-auto">${this.solarObjectRadius}</p>
                </div>
                <br>
                <div class="col-12 row mb-2 p-0">
                <p class="col-10 col-md-6 col-lg-5 my-0 ml-auto">Mass:</p><p class="col-12 col-md-8 col-lg-6 my-0 ml-auto">${this.solarObjectMass}</p>
                </div>
                <br>
                <div class="col-12 row mb-2 p-0">
                <p class="col-10 col-md-6 col-lg-5 my-0 ml-auto">Temperature:</p><p class="col-12 col-md-8 col-lg-6 my-0 ml-auto">${this.solarObjectTemperature}</p>
                </div>
                <br>
                <div class="col-12 row mb-2 p-0">
                <p class="col-10 col-md-6 col-lg-5 my-0 ml-auto">Oribital period:</p> <p class="col-12 col-md-8 col-lg-6 my-0 ml-auto">${this.solarObjectOrbital}</p>
                </div>
                <br>
                <div class="col-12 row mb-2 p-0">
                <p class="col-10 col-md-6 col-lg-5 my-0 ml-auto">Rotation period:</p> <p class="col-12 col-md-8 col-lg-6 my-0 ml-auto">${this.solarObjectRotation}</p>
                </div>
                <br>
            </div>
            <div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
                <a href="#" class="btn btn-secondary text-info btn-lg active mx-auto p-2 pb-3 px-4 w-100 placeBtn" role="button" aria-pressed="true">Planetary locations</a>
            </div>
            <div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
                <a href="#" class="btn btn-secondary text-warning btn-lg active mx-auto p-2 pb-3 px-4 w-100 eventBtn" role="button" aria-pressed="true">Planetary events</a>
            </div>
            <div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
                <a href="#" class="btn btn-secondary text-success btn-lg active mx-auto p-2 pb-3 px-4 w-100 barBtn" role="button" aria-pressed="true">Planetary bars</a>
            </div>
            </div>
         </div>`
    }
}

class Place extends solarObject {
    constructor(
        public solarObjectName: string,
        public solarObjectShortInfo: string,
        public solarObjectImg: string,
        public solarObjectLongInfo: string,
        public solarObjectRadius: string,
        public solarObjectMass: string,
        public solarObjectTemperature: string,
        public solarObjectOrbital: string,
        public solarObjectRotation: string,
        public placeName: string,
        public placeAddress: string,
        public placeInfo: string,
        public placeImg: string) {
        super(solarObjectName,
            solarObjectShortInfo,
            solarObjectImg,
            solarObjectLongInfo,
            solarObjectRadius,
            solarObjectMass,
            solarObjectTemperature,
            solarObjectOrbital,
            solarObjectRotation);
    }
    display(i: number) {
        return super.display(i) + this.placeName
            + this.placeAddress + this.placeInfo + this.placeImg;
    }
}

class EventClass extends solarObject {
    constructor(
        public solarObjectName: string,
        public solarObjectShortInfo: string,
        public solarObjectImg: string,
        public solarObjectLongInfo: string,
        public solarObjectRadius: string,
        public solarObjectMass: string,
        public solarObjectTemperature: string,
        public solarObjectOrbital: string,
        public solarObjectRotation: string,
        public eventName: string,
        public eventAddress: string,
        public eventInfo: string,
        public eventImg: string) {
        super(solarObjectName,
            solarObjectShortInfo,
            solarObjectImg,
            solarObjectLongInfo,
            solarObjectRadius,
            solarObjectMass,
            solarObjectTemperature,
            solarObjectOrbital,
            solarObjectRotation);
    }
    display(i: number) {
        return super.display(i) + this.eventName
            + this.eventAddress + this.eventInfo + this.eventImg;
    }
}
class Restaurants extends solarObject {
    constructor(
        public solarObjectName: string,
        public solarObjectShortInfo: string,
        public solarObjectImg: string,
        public solarObjectLongInfo: string,
        public solarObjectRadius: string,
        public solarObjectMass: string,
        public solarObjectTemperature: string,
        public solarObjectOrbital: string,
        public solarObjectRotation: string,
        public restaurantName: string,
        public restaurantAddress: string,
        public restaurantInfo: string,
        public restaurantImg: string) {
        super(solarObjectName,
            solarObjectShortInfo,
            solarObjectImg,
            solarObjectLongInfo,
            solarObjectRadius,
            solarObjectMass,
            solarObjectTemperature,
            solarObjectOrbital,
            solarObjectRotation);
    }
    display(i: number) {
        return super.display(i) + this.restaurantName
            + this.restaurantAddress + this.restaurantInfo + this.restaurantImg;
    }
}

let solarObjects: any = []
let sun = solarObjects.push(new solarObject("Sun", "Our systems star. It's illumination makes life on Earth possible. Also accounts for 99.86% of the solar systems mass.", "./img/sun.png", "The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond the orbits of distant Neptune and Pluto. Without the sun's intense energy and heat, there would be no life on Earth. And though it is special to us, there are billions of stars like our sun scattered across the Milky Way galaxy. If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel.", "696,342km or 109 Earths", "1.9885×10^30kg or 333,000 Earths", "5,500°C - 15 Million °C", "Orbits galactic center at 220km/s", "~27 days"));
let mercury = solarObjects.push(new solarObject("Mercury", "The closest planet to the sun and a rocky body like Earth. It's the smallest planet in the Solar System.", "./img/mercury.png", "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.", "2,439.7km or 0.382 Earths", "3.3011×10^23kg or 0.055 Earths", "-172°C to +427°C on surface", "~88 days", "~59 days"));
let venus = solarObjects.push(new solarObject("Venus", "Although its beautiful name suggests otherwise, Venus is like Hell on Earth. The atmosphere makes this planet uninhabitable.", "./img/venus.png", "Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world. Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.", "6,051.8km or 0.95 Earths", "4.8675×1024kg or 0.815 Earths", "~460°C on surface", "225 days", "243 days"));
let earth = solarObjects.push(new solarObject("Earth", "Our blue planet. Consists of mostly water and features a life-friendly atmosphere. It's home to life as we know it.", "./img/earth.png", "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal. The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means 'the ground.'", "6,378.1km or 1 Earth", "5.97237×1024kg or 1 Earth", "~15°C on surface", "~365 days", "1 day"));
let mars = solarObjects.push(new solarObject("Mars", "Similar in size to Earth, Mars is also often described as the “Red Planet” due to its reddish appearance.", "./img/mars.png", "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes, evidence of an even more active past. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA currently has three spacecraft in orbit, one rover and one lander on the surface and another rover under construction here on Earth. India and ESA also have spacecraft in orbit above Mars. These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.", "3396.2km or 0.53 Earths", "6.4171×10^23kg or 0.107 Earths", "-143°C to +35°C on surface", "~687 days", "1.1 days"));
let jupiter = solarObjects.push(new solarObject("Jupiter", "The largest gas-giant, protecting Earth from interstellar objects with its massive gravity.", "./img/jupiter.png", "Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe. Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.", "71,492km or 11.209 Earths", "1.8982×10^27kg or 318 Earths, 1/1047 Sun", "~ -110°C", "~4,333 days", "10 hours"));
let saturn = solarObjects.push(new solarObject("Saturn", "The second largest gas-giant, famous for its stellar rings, which consist of countless chunks of ice the size of dust particles to pieces as big as 10 meters.", "./img/saturn.png", "Saturn is the sixth planet from the Sun and the second largest planet in our solar system.Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.", "60,268km or 9.449 Earths", "5.6834×10^26kg or 96.159 Earths", "~ -150°C", "10,759 days", "~10.5 hours"));
let uranus = solarObjects.push(new solarObject("Uranus", "Uranus is often dubbed an ice giant, since at least 80% of its mass is a fluid mix of water, methane and ammonia ice.", "./img/uranus.png", "Uranus is the seventh planet from the sun and the first to be discovered by scientists. Although Uranus is visible to the naked eye, it was long mistaken as a star because of the planet's dimness and slow orbit. The planet is also notable for its dramatic tilt, which causes its axis to point nearly directly at the sun. Uranus is blue-green in color, as a result of the methane in its mostly hydrogen-helium atmosphere. The planet is often dubbed an ice giant, since at least 80% of its mass is a fluid mix of water, methane and ammonia ice.", "25,559km or 4 Earths", "8.6810×10^25kg or 14.5 Earths", "-200°C", "84 years", "17 hours"));
let neptune = solarObjects.push(new solarObject("Neptune", "Neptune, like Uranus, is an ice giant. It is made of a thick soup of water, ammonia, and methane flowing over a solid core about the size of Earth.", "./img/neptune.png", "Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the sun as Earth is. Neptune is very similar to Uranus. It's made of a thick fog of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus. Neptune has six rings, but they're very hard to see.", "24,764km or 3.88 Earths", "1.02413×10^26kg or 17.147 Earths", "-210°C", "~165 years", "16 hours"));

initPage()

function initPage() {
    displayContent()
}

function displayContent() {

    for (let i = 0; i < solarObjects.length; i++) {
        let card = document.createElement("div")
        card.className = "col-lg-4 col-md-6 col-11 p-3 px-4 px-md-3 px-xl-4";
        card.style.height = "445px";
        card.innerHTML = solarObjects[i].display(i);
        document.querySelector("content").appendChild(card);
    }

    let allLearnMoreBtns = document.querySelectorAll(".learnMoreBtn");
    allLearnMoreBtns.forEach(function (elem) {
        elem.addEventListener("click", function (e) {
            let clickedPlanet = e.target.dataset.objectnumber;
            document.querySelector(".solarObjectDetails").innerHTML = " ";
            document.querySelector(".solarObjectDetails").style.visibility = "visible";
            displayDetailsContent(clickedPlanet);
        })
    })

}

function displayDetailsContent(clickedPlanet) {
    let detailsContainer = document.createElement("div");
    detailsContainer.className = "col-12";
    detailsContainer.innerHTML = solarObjects[clickedPlanet].displayDetails();
    document.querySelector(".solarObjectDetails").appendChild(detailsContainer);
}