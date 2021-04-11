//creating a template literal printing both first and last name
let fullN = `Giovanni Rodriguez`;
function createFullN(firstName, lastName) {
    console.log(firstName + '' + lastName);
}
createFullN('Giovanni', 'Rodriguez');
//creating arrow function that will print out the first and lastname called in the function
let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullName('Sam', 'Smith'));

//creating a settimeout method arrow function that will alert us with 'Time is up!' every 2 seconds
setTimeout(() => {
    alert('Time is up!');
}, 2000);
// writting arrow function asking 'are we there yet?', which will then be passed into the call back position
askAreWeThereYet = () => {
    alert('Are we there yet?');
}
// setting interval to print 'are we there yet?' every 3 seconds
setInterval(askAreWeThereYet, 3000);

function processSplicedValue(array,index,callback) {

    let splicedValue = array[index];
    
    array.splice(index,1);
    
    callback(splicedValue);
    
    }
    
    data =["bread","mayo","lettuce","cheese","ketchup","salt","bur","water"];
    
    processSplicedValue(data,3,console.log);
    
    processSplicedValue(data,3,alert);
    
    processSplicedValue(data,3,(value)=>{alert(value)});
    
    function lengthOfSplicedValue(value) {
    
    console.log("The length of spliced string is",value.length);
    
    }
    
    processSplicedValue(data,3,lengthOfSplicedValue);