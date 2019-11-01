
class Planet{
    constructor(public planetName: string, public planetInfo: string, public planetImg: string){
    }
    displayContent(){
        return this.planetName;
    }
}

class Place extends Planet{
    constructor(
        public planetName: string,
        public planetInfo: string,
        public planetImg: string,
        public placeName: string,
        public placeAddress: string,
        public placeInfo: string,
        public placeImg: string)
    {
        super(planetName,planetInfo,planetImg);
    }
    displayContent(){
        return super.displayContent() + this.placeName
        + this.placeAddress + this.placeInfo + this.placeImg;
    }
}

class EventClass extends Planet{
    constructor(
        public planetName: string,
        public planetInfo: string,
        public planetImg: string,
        public eventName: string, 
        public eventAddress: string,
        public eventInfo: string,
        public eventImg: string)
    {
        super(planetName,planetInfo,planetImg);
    }
    displayContent(){
        return super.displayContent() + this.eventName
        + this.eventAddress + this.eventInfo + this.eventImg;
    }
}
class Restaurants extends Planet{
    constructor(
        public planetName: string,
        public planetInfo: string,
        public planetImg: string,
        public restaurantName: string, 
        public restaurantAddress: string,
        public restaurantInfo: string,
        public restaurantImg: string)
    {
        super(planetName,planetInfo,planetImg);
    }
    displayContent(){
        return super.displayContent() + this.restaurantName
        + this.restaurantAddress + this.restaurantInfo + this.restaurantImg;
    }
}


// let n = new Place("mark1","mark2","mark3","mark4","mark5");
// console.log(n)