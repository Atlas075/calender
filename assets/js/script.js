let currentDate = new Date();
let day = currentDate.getDay();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();
let numberDate = currentDate.getDate();
// let time = currentDate.getTime();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Firday", "Saturday"];
var monthList = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var dateList = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]
document.querySelector(".day").innerHTML = "Todays is " + dayList[day] + " " + monthList[month] + " " + dateList[numberDate -1] + ".";
var time = moment().hours()
console.log(time)



var containerEl = document.querySelectorAll('#hour-task');

for( i = 0; i < containerEl.length; i++)
{
    
    var formEl = document.querySelector('#task-sec')
    var currentblock = parseInt(containerEl[i].getAttribute('data-time'))
    var currentData = localStorage.getItem(containerEl[i].getAttribute('data-time'))
    // containerEl[i].appedendChild(currentData)
    
    formEl.innerHTML === currentData

if(currentblock < time)
{
    containerEl[i].classList.add("past")
}
if(currentblock === time)
{
    containerEl[i].classList.add("present")
}
if(currentblock > time)
{
    containerEl[i].classList.add("future")
}

}



         const timeObj = 
            {
                "9 Am" : 9,
                "10 Am" : 10,
                "11 Am" : 11,
                "12 PM" : 12,
                "1 PM" : 13,
                "2 PM" : 14,
                "3 PM" : 15,
                "4 PM" : 16,
                "5 PM" : 17
            }


var displayTimes = function()
{

   

        

    for(i = 0; i < timeObj.lenght; i++)
    {
       console.log(timeObj)
    }

}; 


var savebtn =  $('.save-btn') 

savebtn.on('click', function(event)
{   
    // containerEl.innerHTML = "";
    event.preventDefault();
    console.log('>>>event>>>', event.target);
    var clickedBtn = $(this);
    var textArea = clickedBtn.prev().siblings();
    var timeDiv = textArea.prev()
    console.log('>>> text area content >>>', timeDiv.val());
    console.log('>>>> time div data time>>>', timeDiv.data("text"))
    console.log(event.target)
    localStorage.setItem(timeDiv.data("text"), timeDiv.val())
});


displayTimes();