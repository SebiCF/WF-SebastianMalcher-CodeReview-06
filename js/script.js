"use strict";
class Planet {
    constructor(planetName, planetInfo, planetImg) {
        this.planetName = planetName;
        this.planetInfo = planetInfo;
        this.planetImg = planetImg;
    }
    displayContent() {
        return this.planetName;
    }
}
class Place extends Planet {
    constructor(planetName, planetInfo, planetImg, placeName, placeAddress, placeInfo, placeImg) {
        super(planetName, planetInfo, planetImg);
        this.planetName = planetName;
        this.planetInfo = planetInfo;
        this.planetImg = planetImg;
        this.placeName = placeName;
        this.placeAddress = placeAddress;
        this.placeInfo = placeInfo;
        this.placeImg = placeImg;
    }
    displayContent() {
        return super.displayContent() + this.placeName
            + this.placeAddress + this.placeInfo + this.placeImg;
    }
}
class EventClass extends Planet {
    constructor(planetName, planetInfo, planetImg, eventName, eventAddress, eventInfo, eventImg) {
        super(planetName, planetInfo, planetImg);
        this.planetName = planetName;
        this.planetInfo = planetInfo;
        this.planetImg = planetImg;
        this.eventName = eventName;
        this.eventAddress = eventAddress;
        this.eventInfo = eventInfo;
        this.eventImg = eventImg;
    }
    displayContent() {
        return super.displayContent() + this.eventName
            + this.eventAddress + this.eventInfo + this.eventImg;
    }
}
class Restaurants extends Planet {
    constructor(planetName, planetInfo, planetImg, restaurantName, restaurantAddress, restaurantInfo, restaurantImg) {
        super(planetName, planetInfo, planetImg);
        this.planetName = planetName;
        this.planetInfo = planetInfo;
        this.planetImg = planetImg;
        this.restaurantName = restaurantName;
        this.restaurantAddress = restaurantAddress;
        this.restaurantInfo = restaurantInfo;
        this.restaurantImg = restaurantImg;
    }
    displayContent() {
        return super.displayContent() + this.restaurantName
            + this.restaurantAddress + this.restaurantInfo + this.restaurantImg;
    }
}
// let n = new Place("mark1","mark2","mark3","mark4","mark5");
// console.log(n)
