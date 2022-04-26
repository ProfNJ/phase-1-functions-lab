
const a = 42;
const conversion = 264;
function distanceFromHqInBlocks(b){
 return Math.abs(b - a);
}

function distanceFromHqInFeet(b){
    return distanceFromHqInBlocks(b) * conversion;
}

function distanceTravelledInFeet(start, end){
    return Math.abs(end - start) * conversion;

}

function calculatesFarePrice(start, end){
    let fare = distanceTravelledInFeet(start, end);
    if (fare < 400){
        return 0;
    }else if(fare > 2500){
        return "cannot travel that far"
    }else{
        return fare > 2000? 25:(fare - 400) * .02;
    }
}
// Code your solution in this file!
