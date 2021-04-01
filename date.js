module.exports.getDate=getDate;// no () coz it means that we are calling the function here itself

function getDate(){
    var today=new Date();
    var options = { weekday: 'long',  // got the idea from stack overflow!
                    
                    month: 'long', 
                    day: 'numeric' };

    return today.toLocaleDateString("en-US",options); // Saturday, September 17, 2016

    
}

module.exports.getDay=getDay;

function getDay(){
    var today=new Date();
    var options = { weekday: 'long'};  // got the idea from stack overflow 

    return today.toLocaleDateString("en-US",options); // Saturday, September 17, 2016

}