// Code your solution in this file!
//             FIRST DRIVERS
const theDrivers = (['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnFirstTwoDrivers = function(){
    return theDrivers.slice(0,2);
    
}
returnFirstTwoDrivers();

//           LAST DRIVERS
const returnLastTwoDrivers = function(){
    return theDrivers.slice(2,4);
}
returnLastTwoDrivers();

//         SELECTING DRIVERS
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//           FARE MULTIPLER

const createFareMultiplier = (num1) => (integer) =>{
    return num1 * integer;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

//     SELECTING DRIVERS

const selectDifferentDrivers = function(theDrivers, selectDrivers){
    return selectDrivers(theDrivers)
};