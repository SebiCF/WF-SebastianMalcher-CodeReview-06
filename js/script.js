"use strict";
class solarObject {
    constructor(solarObjectName, solarObjectShortInfo, solarObjectImg, solarObjectLongInfo, solarObjectRadius, solarObjectMass, solarObjectTemperature, solarObjectOrbital, solarObjectRotation) {
        this.solarObjectName = solarObjectName;
        this.solarObjectShortInfo = solarObjectShortInfo;
        this.solarObjectImg = solarObjectImg;
        this.solarObjectLongInfo = solarObjectLongInfo;
        this.solarObjectRadius = solarObjectRadius;
        this.solarObjectMass = solarObjectMass;
        this.solarObjectTemperature = solarObjectTemperature;
        this.solarObjectOrbital = solarObjectOrbital;
        this.solarObjectRotation = solarObjectRotation;
    }
    display(i) {
        return `<div class="row lead contentCard p-2 pb-3">
                    <div class="col-12 h3 mb-0 mt-1 d-flex align-self-start align-items-center justify-content-center text-light" style="text-shadow: 5px 5px 9px rgba(0, 0, 0,0.5);">${this.solarObjectName}</div>
                    <div class="col-12 col-sm-6 p-1"> ${this.solarObjectShortInfo}</div>
                    <img class="col-6 w-50 img-fluid h-50 my-auto d-none d-sm-block p-1 solarObjectImgSmall"src="${this.solarObjectImg}">
                    <div class="col row mx-auto mt-2 align-self-end">
                        <a href="#detailsContainer" data-objectNumber="${i}"class="btn btn-secondary text-success btn-md active mx-auto p-1 px-3 learnMoreBtn" role="button" aria-pressed="true">Learn more!</a>
                    </div>
                </div>`;
    }
    displayDetails() {
        return `<div class="card mb-4 box-shadow">
            <img class="card-img-top mx-auto img-fluid" src="${this.solarObjectImg}" data-holder-rendered="true" style="width: 35%; display: block;">
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
                <a class="btn btn-secondary text-info btn-lg active mx-auto p-2 pb-3 px-4 w-100 placeBtn" role="button" aria-pressed="true">Planetary locations</a>
            </div>
            <div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
                <a class="btn btn-secondary text-warning btn-lg active mx-auto p-2 pb-3 px-4 w-100 eventBtn" role="button" aria-pressed="true">Planetary events</a>
            </div>
            <div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
                <a class="btn btn-secondary text-success btn-lg active mx-auto p-2 pb-3 px-4 w-100 barBtn" role="button" aria-pressed="true">Planetary bars</a>
            </div>
            </div>
         </div>`;
    }
}
class Place extends solarObject {
    constructor(solarObjectName, solarObjectShortInfo, solarObjectImg, solarObjectLongInfo, solarObjectRadius, solarObjectMass, solarObjectTemperature, solarObjectOrbital, solarObjectRotation, placeName, placeAddress, placeInfo, placeImg) {
        super(solarObjectName, solarObjectShortInfo, solarObjectImg, solarObjectLongInfo, solarObjectRadius, solarObjectMass, solarObjectTemperature, solarObjectOrbital, solarObjectRotation);
        this.solarObjectName = solarObjectName;
        this.solarObjectShortInfo = solarObjectShortInfo;
        this.solarObjectImg = solarObjectImg;
        this.solarObjectLongInfo = solarObjectLongInfo;
        this.solarObjectRadius = solarObjectRadius;
        this.solarObjectMass = solarObjectMass;
        this.solarObjectTemperature = solarObjectTemperature;
        this.solarObjectOrbital = solarObjectOrbital;
        this.solarObjectRotation = solarObjectRotation;
        this.placeName = placeName;
        this.placeAddress = placeAddress;
        this.placeInfo = placeInfo;
        this.placeImg = placeImg;
    }
    displayPlaceDetails(i) {
        return `<div class="accordion container p-0 mb-4" id="accordion${i}">
                    <div class="card p-3">
                        <div class="card-header" id="heading${i}">
                            <h1 class="mb-0 text-center">
                                <button class="btn btn-link text-info btn-lg shownEventBtn" data-eventNumber="${i}" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                                ${this.placeName}
                                    </button>
                                </h1>
                            </div>
                        <div id="collapse${i}" class="collapse p-0" aria-labelledby="heading${i}" data-parent="#accordion${i}">
                            <div class="card-body p-2">
                                <div class="card mb-4 box-shadow p-2">
                                    <img class="card-img-top mx-auto my-3 img-fluid imgCollapse" src="${this.placeImg}" data-holder-rendered="true" style="height: 350px; width: 95%; display: block;">
                                    <div class="card-body pt-0 row">
                                    <div class="col-12 h2 text-light px-0 pt-1 pb-1"><p class="col text-center p-1 my-0 mx-auto">${this.placeName}</p></div>
                                    <p class="col-8 mx-auto card-text text-center lead text-light px-4" style="line-height: 1.5">${this.placeInfo}</p>
                                    <p class="col-8 mx-auto card-text text-center lead text-light px-4 my-3" style="line-height: 1.5">At ${this.placeAddress}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    }
}
class EventClass extends solarObject {
    constructor(solarObjectName, solarObjectShortInfo, solarObjectImg, solarObjectLongInfo, solarObjectRadius, solarObjectMass, solarObjectTemperature, solarObjectOrbital, solarObjectRotation, eventName, eventTime, eventInfo, eventImg) {
        super(solarObjectName, solarObjectShortInfo, solarObjectImg, solarObjectLongInfo, solarObjectRadius, solarObjectMass, solarObjectTemperature, solarObjectOrbital, solarObjectRotation);
        this.solarObjectName = solarObjectName;
        this.solarObjectShortInfo = solarObjectShortInfo;
        this.solarObjectImg = solarObjectImg;
        this.solarObjectLongInfo = solarObjectLongInfo;
        this.solarObjectRadius = solarObjectRadius;
        this.solarObjectMass = solarObjectMass;
        this.solarObjectTemperature = solarObjectTemperature;
        this.solarObjectOrbital = solarObjectOrbital;
        this.solarObjectRotation = solarObjectRotation;
        this.eventName = eventName;
        this.eventTime = eventTime;
        this.eventInfo = eventInfo;
        this.eventImg = eventImg;
    }
    displayEventDetails(i) {
        return `<div class="accordion container p-0 mb-4" id="accordion${i}">
                    <div class="card p-3">
                        <div class="card-header" id="heading${i}">
                            <h1 class="mb-0 text-center">
                                <button href="#heading${i}" class="btn btn-link text-warning btn-lg shownEventBtn" data-eventNumber="${i}" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                                ${this.eventName}
                                    </button>
                                </h1>
                            </div>
                        <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordion${i}">
                            <div class="card-body p-2">
                                <div class="card mb-4 box-shadow p-2">
                                    <img class="card-img-top mx-auto my-3 img-fluid imgCollapse" src="${this.eventImg}" data-holder-rendered="true" style="height: 350px; width: 95%; display: block;">
                                    <div class="card-body pt-0 row">
                                    <div class="col-12 h2 text-light px-0 pt-1 pb-1"><p class="col text-center p-1 my-0 mx-auto">${this.eventName}</p></div>
                                    <p class="col-8 mx-auto card-text text-center lead text-light px-4" style="line-height: 1.5">${this.eventInfo}</p>
                                    <p class="col-8 mx-auto card-text text-center lead text-light px-4 my-3" style="line-height: 1.5">${this.eventTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    }
}
class Bar extends solarObject {
    constructor(solarObjectName, solarObjectShortInfo, solarObjectImg, solarObjectLongInfo, solarObjectRadius, solarObjectMass, solarObjectTemperature, solarObjectOrbital, solarObjectRotation, barName, barAddress, barInfo, barMenu, barImg) {
        super(solarObjectName, solarObjectShortInfo, solarObjectImg, solarObjectLongInfo, solarObjectRadius, solarObjectMass, solarObjectTemperature, solarObjectOrbital, solarObjectRotation);
        this.solarObjectName = solarObjectName;
        this.solarObjectShortInfo = solarObjectShortInfo;
        this.solarObjectImg = solarObjectImg;
        this.solarObjectLongInfo = solarObjectLongInfo;
        this.solarObjectRadius = solarObjectRadius;
        this.solarObjectMass = solarObjectMass;
        this.solarObjectTemperature = solarObjectTemperature;
        this.solarObjectOrbital = solarObjectOrbital;
        this.solarObjectRotation = solarObjectRotation;
        this.barName = barName;
        this.barAddress = barAddress;
        this.barInfo = barInfo;
        this.barMenu = barMenu;
        this.barImg = barImg;
    }
    displayBarDetails(i) {
        return `<div class="accordion container p-0 mb-4" id="accordion${i}">
                    <div class="card p-3">
                        <div class="card-header" id="heading${i}">
                            <h1 class="mb-0 text-center">
                                <button href="#heading${i}" class="btn btn-link text-success btn-lg shownEventBtn" data-eventNumber="${i}" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                                ${this.barName}
                                    </button>
                                </h1>
                            </div>
                        <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordion${i}">
                            <div class="card-body p-2">
                                <div class="card mb-4 box-shadow p-2">
                                    <img class="card-img-top mx-auto my-3 img-fluid imgCollapse" src="${this.barImg}" data-holder-rendered="true" style="height: 350px; width: 95%; display: block;">
                                    <div class="card-body pt-0 row">
                                    <div class="col-12 h2 text-light px-0 pt-1 pb-1"><p class="col text-center p-1 my-0 mx-auto">${this.barName}</p></div>
                                    <p class="col-8 mx-auto card-text text-center lead text-light px-4" style="line-height: 1.5">${this.barInfo}</p>
                                    <h4 class="col-8 mx-auto card-text mb-0 text-center text-light px-4 mt-3" style="line-height: 1.5">Menu</h4>
                                    <p class="col-8 mx-auto card-text text-center mb-3 lead text-light px-4" style="line-height: 1.5">${this.barMenu}</p>
                                    <br>
                                    <br>
                                    <p class="col-8 mx-auto card-text text-center lead text-light px-4 my-3" style="line-height: 1.5">At ${this.barAddress}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    }
}
let solarObjects = [];
let sun = solarObjects.push(new solarObject("Sun", "Our systems star. It's illumination makes life on Earth possible. Also accounts for 99.86% of the solar systems mass.", "./img/sun.png", "The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond the orbits of distant Neptune and Pluto. Without the sun's intense energy and heat, there would be no life on Earth. And though it is special to us, there are billions of stars like our sun scattered across the Milky Way galaxy. If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel.", "696,342km or 109 Earths", "1.9885×10^30kg or 333,000 Earths", "5,500°C - 15 Million °C", "Orbits galactic center at 220km/s", "~27 days"));
let mercury = solarObjects.push(new solarObject("Mercury", "The closest planet to the sun and a rocky body like Earth. It's the smallest planet in the Solar System.", "./img/mercury.png", "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.", "2,439.7km or 0.382 Earths", "3.3011×10^23kg or 0.055 Earths", "-172°C to +427°C on surface", "~88 days", "~59 days"));
let venus = solarObjects.push(new solarObject("Venus", "Although its beautiful name suggests otherwise, Venus is like Hell on Earth. The atmosphere makes this planet uninhabitable.", "./img/venus.png", "Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world. Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.", "6,051.8km or 0.95 Earths", "4.8675×1024kg or 0.815 Earths", "~460°C on surface", "225 days", "243 days"));
let earth = solarObjects.push(new solarObject("Earth", "Our blue planet. Consists of mostly water and features a life-friendly atmosphere. It's home to life as we know it.", "./img/earth.png", "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal. The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means 'the ground.'", "6,378.1km or 1 Earth", "5.97237×1024kg or 1 Earth", "~15°C on surface", "~365 days", "1 day"));
let mars = solarObjects.push(new solarObject("Mars", "Similar in size to Earth, Mars is also often described as the “Red Planet” due to its reddish appearance.", "./img/mars.png", "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes, evidence of an even more active past. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA currently has three spacecraft in orbit, one rover and one lander on the surface and another rover under construction here on Earth. India and ESA also have spacecraft in orbit above Mars. These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.", "3396.2km or 0.53 Earths", "6.4171×10^23kg or 0.107 Earths", "-143°C to +35°C on surface", "~687 days", "1.1 days"));
let jupiter = solarObjects.push(new solarObject("Jupiter", "The largest gas-giant, protecting Earth from interstellar objects with its massive gravity.", "./img/jupiter.png", "Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe. Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.", "71,492km or 11.209 Earths", "1.8982×10^27kg or 318 Earths, 1/1047 Sun", "~ -110°C", "~4,333 days", "10 hours"));
let saturn = solarObjects.push(new solarObject("Saturn", "The second largest gas-giant, famous for its stellar rings, which consist of countless chunks of ice the size of dust particles to pieces as big as 10 meters.", "./img/saturn.png", "Saturn is the sixth planet from the Sun and the second largest planet in our solar system.Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.", "60,268km or 9.449 Earths", "5.6834×10^26kg or 96.159 Earths", "~ -150°C", "10,759 days", "~10.5 hours"));
let uranus = solarObjects.push(new solarObject("Uranus", "Uranus is often dubbed an ice giant, since at least 80% of its mass is a fluid mix of water, methane and ammonia ice.", "./img/uranus.png", "Uranus is the seventh planet from the sun and the first to be discovered by scientists. Although Uranus is visible to the naked eye, it was long mistaken as a star because of the planet's dimness and slow orbit. The planet is also notable for its dramatic tilt, which causes its axis to point nearly directly at the sun. Uranus is blue-green in color, as a result of the methane in its mostly hydrogen-helium atmosphere. The planet is often dubbed an ice giant, since at least 80% of its mass is a fluid mix of water, methane and ammonia ice.", "25,559km or 4 Earths", "8.6810×10^25kg or 14.5 Earths", "-200°C", "84 years", "17 hours"));
let neptune = solarObjects.push(new solarObject("Neptune", "Neptune, like Uranus, is an ice giant. It is made of a thick soup of water, ammonia, and methane flowing over a solid core about the size of Earth.", "./img/neptune.png", "Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the sun as Earth is. Neptune is very similar to Uranus. It's made of a thick fog of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus. Neptune has six rings, but they're very hard to see.", "24,764km or 3.88 Earths", "1.02413×10^26kg or 17.147 Earths", "-210°C", "~165 years", "16 hours"));
let solarPlaces = [];
let sunSurface = solarPlaces.push(new Place("Sun", "Our systems star. It's illumination makes life on Earth possible. Also accounts for 99.86% of the solar systems mass.", "./img/sun.png", "The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond the orbits of distant Neptune and Pluto. Without the sun's intense energy and heat, there would be no life on Earth. And though it is special to us, there are billions of stars like our sun scattered across the Milky Way galaxy. If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel.", "696,342km or 109 Earths", "1.9885×10^30kg or 333,000 Earths", "5,500°C - 15 Million °C", "Orbits galactic center at 220km/s", "~27 days", "Surface of the Sun", "Sun, Center of the Solar System", "The temperature at the surface is nearly 6,000 degrees Centigrade. The gases move at thousands of miles an hour. You can't stand on the surface of the Sun even if you could protect yourself. The Sun is a huge ball of heated gas with no solid surface. The Sun's surface is always moving. Sometimes storms bigger than the size of Earth can send gas and energy flowing into space.", "./img/sun_surface.jpg"));
let sunCore = solarPlaces.push(new Place("Sun", "Our systems star. It's illumination makes life on Earth possible. Also accounts for 99.86% of the solar systems mass.", "./img/sun.png", "The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond the orbits of distant Neptune and Pluto. Without the sun's intense energy and heat, there would be no life on Earth. And though it is special to us, there are billions of stars like our sun scattered across the Milky Way galaxy. If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel.", "696,342km or 109 Earths", "1.9885×10^30kg or 333,000 Earths", "5,500°C - 15 Million °C", "Orbits galactic center at 220km/s", "~27 days", "Core of the Sun", "Sun, Center of the Solar System", "The Sun's core is the central region where nuclear reactions consume hydrogen to form helium. These reactions release the energy that ultimately leaves the surface as visible light. These reactions are highly sensitive to temperature and density. The temperature at the very center of the Sun is about 15,000,000° C (27,000,000° F) and the density is about 150 g/cm³ (approximately 10 times the density of gold, 19.3 g/cm³ or lead, 11.3 g/cm³). Both the temperature and the density decrease as one moves outward from the center of the Sun. ", "./img/sun_core.jpg"));
let mercurySurface = solarPlaces.push(new Place("Mercury", "The closest planet to the sun and a rocky body like Earth. It's the smallest planet in the Solar System.", "./img/mercury.png", "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.", "2,439.7km or 0.382 Earths", "3.3011×10^23kg or 0.055 Earths", "-172°C to +427°C on surface", "~88 days", "~59 days", "Mercury's surface", "Mercury, first planet", "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. Because knowledge of Mercury's geology had been based only on the 1975 Mariner 10 flyby and terrestrial observations, it is the least understood of the terrestrial planets. Mercury was heavily bombarded by comets and asteroids during and shortly following its formation 4.6 billion years ago. he surface temperature of Mercury ranges from 100 to 700 K (−173 to 427 °C; −280 to 800 °F)[18] at the most extreme places.", "./img/mercurySurface.jpg"));
let venusSurface = solarPlaces.push(new Place("Venus", "Although its beautiful name suggests otherwise, Venus is like Hell on Earth. The atmosphere makes this planet uninhabitable.", "./img/venus.png", "Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world. Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.", "6,051.8km or 0.95 Earths", "4.8675×1024kg or 0.815 Earths", "~460°C on surface", "225 days", "243 days", "Depths of Venus", "Venus, second planet", "Venus is often called Earth's 'Sister Planet' because of all the things they have in common. But beyond that, there are some notable differences that makes Venus a molten hellhole, and about the last place anyone would want to visit! Much of this has to do with Venus' atmosphere, which is incredibly dense and entirely hostile to life as we know it. And because of its natural density and composition, the average surface temperature of Venus is hot enough to melt lead. All of this adds up to some pretty interesting weather patterns, which are also incredibly hostile!", "./img/venusSurface.jpg"));
let earthSurface = solarPlaces.push(new Place("Earth", "Our blue planet. Consists of mostly water and features a life-friendly atmosphere. It's home to life as we know it.", "./img/earth.png", "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal. The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means 'the ground.'", "6,378.1km or 1 Earth", "5.97237×1024kg or 1 Earth", "~15°C on surface", "~365 days", "1 day", "Earth's surface", "Earth, third planet", "The total surface area of Earth is about 510 million km2. Of this, 70.8%, or 361.13 million km2, is below sea level and covered by ocean water. The remaining 29.2%, or 148.94 million km2 (57.51 million sq mi), not covered by water has terrain that varies greatly from place to place and consists of mountains, deserts, plains, plateaus, and other landforms. A planet that can sustain life is termed habitable, even if life did not originate there. Earth provides liquid water—an environment where complex organic molecules can assemble and interact, and sufficient energy to sustain metabolism. The distance of Earth from the Sun, as well as its orbital eccentricity, rate of rotation, axial tilt, geological history, sustaining atmosphere, and magnetic field all contribute to the current climatic conditions at the surface.", "./img/earthSurface.jpg"));
let marsSurface = solarPlaces.push(new Place("Mars", "Similar in size to Earth, Mars is also often described as the “Red Planet” due to its reddish appearance.", "./img/mars.png", "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes, evidence of an even more active past. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA currently has three spacecraft in orbit, one rover and one lander on the surface and another rover under construction here on Earth. India and ESA also have spacecraft in orbit above Mars. These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.", "3396.2km or 0.53 Earths", "6.4171×10^23kg or 0.107 Earths", "-143°C to +35°C on surface", "~687 days", "1.1 days", "Mars Surface", "Mars, fourth planet", "The Red Planet is actually many colors. At the surface we see colors such as brown, gold and tan. The reason Mars looks reddish is due to oxidization—or rusting—of iron in the rocks, regolith (Martian “soil”), and dust of Mars. This dust gets kicked up into the atmosphere and from a distance makes the planet appear mostly red. Interestingly, while Mars is about half the diameter of Earth, its surface has nearly the same area as Earth’s dry land. Its volcanoes, impact craters, crustal movement, and atmospheric conditions such as dust storms have altered the landscape of Mars over many years, creating some of the solar system's most interesting topographical features.", "./img/marsSurface.jpg"));
let jupiterSurface = solarPlaces.push(new Place("Jupiter", "The largest gas-giant, protecting Earth from interstellar objects with its massive gravity.", "./img/jupiter.png", "Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe. Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.", "71,492km or 11.209 Earths", "1.8982×10^27kg or 318 Earths, 1/1047 Sun", "~ -110°C", "~4,333 days", "10 hours", "Jupiters Surface?", "Jupiter, fifth planet", "There is no firm surface on Jupiter, so if you tried to stand on the planet, you sink down and be crushed by the intense pressure inside the planet. When we look at Jupiter, we’re actually seeing the outermost layer of its clouds. Jupiter upper atmosphere is made of up to 90% hydrogen, with 10% helium, and then other gases like ammonia. The bands and storms that we can see on the planet are all generated in the upper atmosphere. The cloud layer we can see is made of ammonia, and only extends down for about 50 km or so.", "./img/jupiterSurface.jpg"));
let saturnSurface = solarPlaces.push(new Place("Saturn", "The second largest gas-giant, famous for its stellar rings, which consist of countless chunks of ice the size of dust particles to pieces as big as 10 meters.", "./img/saturn.png", "Saturn is the sixth planet from the Sun and the second largest planet in our solar system.Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.", "60,268km or 9.449 Earths", "5.6834×10^26kg or 96.159 Earths", "~ -150°C", "10,759 days", "~10.5 hours", "Saturn's Rings", "Saturn, sixth planet", "The rings are about 400,000 kilometers (240,000 miles) wide. That's the distance from the Earth to the Moon! But the rings are as little as 100 meters (330 feet) thick. They range from particles too tiny to see to 'particles' the size of a bus. Scientists think they are icy snowballs or ice covered rocks. There are actually many rings—maybe 500 to 1000. There are also gaps in the rings.", "./img/saturnRings.jpg"));
let solarEvents = [];
let sunEnd = solarEvents.push(new EventClass("Sun", "Our systems star. It's illumination makes life on Earth possible. Also accounts for 99.86% of the solar systems mass.", "./img/sun.png", "The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond the orbits of distant Neptune and Pluto. Without the sun's intense energy and heat, there would be no life on Earth. And though it is special to us, there are billions of stars like our sun scattered across the Milky Way galaxy. If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel.", "696,342km or 109 Earths", "1.9885×10^30kg or 333,000 Earths", "5,500°C - 15 Million °C", "Orbits galactic center at 220km/s", "~27 days", "The Sun runs out of fuel", "In 600 Million years from now", "As the Sun burns through its supply of hydrogen fuel, it gets hotter and burns the remaining fuel even faster. As a result, the Sun is growing brighter at a rate of ten percent every 1.1 billion years.[105] In about 600 million years, the Sun's brightness will have disrupted the Earth's carbon cycle to the point where trees and forests (C3 photosynthetic plant life) will no longer be able to survive; and in around 800 million years, the Sun will have killed all complex life on the Earth's surface and in the oceans. In 1.1 billion years' time, the Sun's increased radiation output will cause its circumstellar habitable zone to move outwards, making the Earth's surface too hot for liquid water to exist there naturally. At this point, all life will be reduced to single-celled organisms. By 3.5 billion years from now, Earth's surface conditions will be similar to those of Venus today.", "./img/sunEnd.png"));
let mercuryDawn = solarEvents.push(new EventClass("Mercury", "The closest planet to the sun and a rocky body like Earth. It's the smallest planet in the Solar System.", "./img/mercury.png", "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.", "2,439.7km or 0.382 Earths", "3.3011×10^23kg or 0.055 Earths", "-172°C to +427°C on surface", "~88 days", "~59 days", "Mercury's double dawn", "Every ~60 days", "Mercury possesses the most eccentric orbit of any planet. It rotates on its axis three times for every two revolutions it makes around the Sun. But when it arrives at perihelion (its closest to the Sun) Mercury’s orbital velocity will exceed its rotational speed. As a consequence, a hypothetical observer standing on Mercury would see a sight unique in our entire solar system. Over the course of eight days (fours days before perihelion to four days after perihelion), the Sun would appear to reverse its course across the sky, then double back and resume its normal track across the sky.If our observer were located on that part of Mercury where the Sun were to rise around the time of perihelion, the Sun would appear to partially come up above the eastern horizon, pause and then drop back below the horizon, followed in rapid succession by a second sunrise!", "./img/mercuryDawn.gif"));
let solarBars = [];
let sunBar = solarBars.push(new Bar("Sun", "Our systems star. It's illumination makes life on Earth possible. Also accounts for 99.86% of the solar systems mass.", "./img/sun.png", "The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond the orbits of distant Neptune and Pluto. Without the sun's intense energy and heat, there would be no life on Earth. And though it is special to us, there are billions of stars like our sun scattered across the Milky Way galaxy. If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel.", "696,342km or 109 Earths", "1.9885×10^30kg or 333,000 Earths", "5,500°C - 15 Million °C", "Orbits galactic center at 220km/s", "~27 days", "Sun Bar", "Sun, Center of the Solar System", "The hottest bar in the Solar System. They serve the hottest drinks on the hottest bars.", "Hot, spicey drinks. They will surely enlighten you!", "./img/sunBar.jpg"));
let marsSpaceCanteen = solarBars.push(new Bar("Mars", "Similar in size to Earth, Mars is also often described as the “Red Planet” due to its reddish appearance.", "./img/mars.png", "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes, evidence of an even more active past. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA currently has three spacecraft in orbit, one rover and one lander on the surface and another rover under construction here on Earth. India and ESA also have spacecraft in orbit above Mars. These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.", "3396.2km or 0.53 Earths", "6.4171×10^23kg or 0.107 Earths", "-143°C to +35°C on surface", "~687 days", "1.1 days", "Space Cantina", "Backside of Mars, hidden from Earth of course", "The bar acts as a busy, bustling port city situated in a desert plain, populated with transients of all species. The lawless spaceport attracts criminals, smugglers and fugitives. If you want to hang out, realx and not worry about the cops, this is THE place to be!", "Serves all drinks a criminal wants", "./img/spaceCantina.jpg"));
let earthPub = solarBars.push(new Bar("Earth", "Our blue planet. Consists of mostly water and features a life-friendly atmosphere. It's home to life as we know it.", "./img/earth.png", "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal. The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means 'the ground.'", "6,378.1km or 1 Earth", "5.97237×1024kg or 1 Earth", "~15°C on surface", "~365 days", "1 day", "Dublin Irish Pub", "Austria, Vienna 1060, GumpendorferStraße 93", "Im Herzen des 4. Bezirks findest du das Four Bells Irish Pub in der Schleifmühlgasse 2 im 4. Wiener Gemeindebezirk. Entdecke als erstes unsere seeeehr lange, dunkelhölzerne Bar mit mehr als genug Platz für einen Whiskey (oder zwei) mit altbekannten oder neuen Freunden!", " Bei uns findest du  verschiedenste Biere vom Fass, Spezialitäten aus der Flasche und eine besondere Craftbeer-Karte. Dazu passen zahlreiche heimische und nationale „Spirits“ – sogar schottischen Whiskey oder Bourbon findest du trotz des irischen Flairs.", "./img/earthFourBellsPub.jpg"));
initPage();
function initPage() {
    displayContent();
    addPlanetObject();
}
function displayContent() {
    for (let i = 0; i < solarObjects.length; i++) {
        let card = document.createElement("div");
        card.className = "col-lg-4 col-md-6 col-11 p-3 px-4 px-md-3 px-xl-4";
        card.style.height = "470px";
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
        });
    });
}
function displayDetailsContent(clickedPlanet) {
    let detailsContainer = document.createElement("div");
    detailsContainer.className = "col-12";
    detailsContainer.innerHTML = solarObjects[clickedPlanet].displayDetails();
    document.querySelector(".solarObjectDetails").appendChild(detailsContainer);
    let moreDetailsContainer = document.createElement("div");
    moreDetailsContainer.className = "col-12 moreDetailsContainer";
    moreDetailsContainer.id = "moreDetailsContainerID";
    moreDetailsContainer.style.display = "none";
    moreDetailsContainer.style.opacity = "0";
    moreDetailsContainer.style.transition = "opacity 1s";
    document.querySelector(".solarObjectDetails").appendChild(moreDetailsContainer);
    let currentSolarObjectName = solarObjects[clickedPlanet].solarObjectName;
    let placeBtnEvent = document.querySelector(".placeBtn");
    placeBtnEvent.addEventListener("click", function () {
        document.querySelector(".moreDetailsContainer").innerHTML = " ";
        document.querySelector(".moreDetailsContainer").style.display = "block";
        document.querySelector(".moreDetailsContainer").style.opacity = "1";
        displayPlaces(currentSolarObjectName);
        $('html, body').animate({
            scrollTop: $(`#moreDetailsContainerID`).offset().top
        }, 600);
    });
    let eventBtnEvent = document.querySelector(".eventBtn");
    eventBtnEvent.addEventListener("click", function () {
        document.querySelector(".moreDetailsContainer").innerHTML = " ";
        document.querySelector(".moreDetailsContainer").style.display = "block";
        document.querySelector(".moreDetailsContainer").style.opacity = "1";
        displayEvents(currentSolarObjectName);
        $('html, body').animate({
            scrollTop: $(`#moreDetailsContainerID`).offset().top
        }, 600);
    });
    let barBtnEvent = document.querySelector(".barBtn");
    barBtnEvent.addEventListener("click", function () {
        document.querySelector(".moreDetailsContainer").innerHTML = " ";
        document.querySelector(".moreDetailsContainer").style.display = "block";
        document.querySelector(".moreDetailsContainer").style.opacity = "1";
        displayBars(currentSolarObjectName);
        $('html, body').animate({
            scrollTop: $(`#moreDetailsContainerID`).offset().top
        }, 600);
    });
}
function displayPlaces(currentSolarObjectName) {
    for (let i = 0; i < solarPlaces.length; i++) {
        if (solarPlaces[i].solarObjectName == currentSolarObjectName) {
            document.querySelector(".moreDetailsContainer").innerHTML += solarPlaces[i].displayPlaceDetails(i);
        }
    }
    scrollIntoView();
}
function displayEvents(currentSolarObjectName) {
    for (let i = 0; i < solarEvents.length; i++) {
        if (solarEvents[i].solarObjectName == currentSolarObjectName) {
            document.querySelector(".moreDetailsContainer").innerHTML += solarEvents[i].displayEventDetails(i);
        }
    }
    scrollIntoView();
}
function displayBars(currentSolarObjectName) {
    for (let i = 0; i < solarBars.length; i++) {
        if (solarBars[i].solarObjectName == currentSolarObjectName) {
            document.querySelector(".moreDetailsContainer").innerHTML += solarBars[i].displayBarDetails(i);
        }
    }
    scrollIntoView();
}
function scrollIntoView() {
    let allEventBtns = document.querySelectorAll(".shownEventBtn");
    allEventBtns.forEach(elem => {
        elem.addEventListener("click", function (e) {
            let eventNumber = e.target.dataset.eventnumber;
            $('html, body').animate({
                scrollTop: $(`#accordion${eventNumber} .card`).offset().top
            }, 600);
        });
    });
}
function addPlanetObject() {
    document.getElementById("createObjectBtn").addEventListener("click", function (e) {
        let planet = document.getElementById("planetInput").value;
        let eventType = document.getElementById("typeInput").value;
        let name = document.getElementById("AddName").value;
        let address = document.getElementById("AddAdressOrEventTime").value;
        let info = document.getElementById("AddInfo").value;
        let image = document.getElementById("AddImage").value;
        let menu = document.getElementById("AddBarMenu").value;
        if (planet !== "Choose...") {
            if (eventType == "Place") {
                let newobject = solarPlaces.push(new Place(planet, " ", " ", " ", " ", " ", " ", " ", " ", name, address, info, image));
                console.log(solarPlaces);
            }
            else if (eventType == "Event") {
                let newobject = solarEvents.push(new EventClass(planet, " ", " ", " ", " ", " ", " ", " ", " ", name, address, info, image));
            }
            else if (eventType == "Bar") {
                let newobject = solarBars.push(new Bar(planet, " ", " ", " ", " ", " ", " ", " ", " ", name, address, info, menu, image));
            }
        }
    });
}
