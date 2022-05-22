// displays the current day in (mm/dd)
var currentDay = document.querySelector('currentDay')
document.querySelector(".day").innerHTML = moment().format("dddd MMM Do")
var time = moment().hours()



//displays the timesblocks
var containerEl = document.querySelectorAll('#hour-task');

for( i = 0; i < containerEl.length; i++)
{
    var currentblock = parseInt(containerEl[i].getAttribute('data-time'))
    var currentData = localStorage.getItem(containerEl[i].getAttribute('data-time'))


 //saves and returns local storage data to the user (start)

    var currentText9 = document.querySelector('#task-sec9')
    currentText9.addEventListener("keyup", event =>
    {
        localStorage.setItem("text9", event.target.value)
    })
    currentText9.value = localStorage.getItem("text9")


    var currentText10 = document.querySelector('#task-sec10')
    currentText10.addEventListener("keyup", event =>
    {
        localStorage.setItem("text10", event.target.value)
    })
    currentText10.value = localStorage.getItem("text10")

    var currentText11 = document.querySelector('#task-sec11')
    currentText11.addEventListener("keyup", event =>
    {
        localStorage.setItem("text11", event.target.value)
    })
    currentText11.value = localStorage.getItem("text11")


    var currentText12 = document.querySelector('#task-sec12')
    currentText12.addEventListener("keyup", event =>
    {
        localStorage.setItem("text12", event.target.value)
    })
    currentText12.value = localStorage.getItem("text12")


    var currentText13 = document.querySelector('#task-sec13')
    currentText13.addEventListener("keyup", event =>
    {
        localStorage.setItem("text13", event.target.value)
    })
    currentText13.value = localStorage.getItem("text13")


    var currentText14 = document.querySelector('#task-sec14')
    currentText14.addEventListener("keyup", event =>
    {
        localStorage.setItem("text14", event.target.value)
    })
    currentText14.value = localStorage.getItem("text14")


    var currentText15 = document.querySelector('#task-sec15')
    currentText15.addEventListener("keyup", event =>
    {
        localStorage.setItem("text15", event.target.value)
    })
    currentText15.value = localStorage.getItem("text15")


    var currentText16 = document.querySelector('#task-sec16')
    currentText16.addEventListener("keyup", event =>
    {
        localStorage.setItem("text16", event.target.value)
    })
    currentText16.value = localStorage.getItem("text16")


    var currentText17 = document.querySelector('#task-sec17')
    currentText17.addEventListener("keyup", event =>
    {
        localStorage.setItem("text17", event.target.value)
    })
    currentText17.value = localStorage.getItem("text17")

     //saves and returns local storage data to the user (end)


// checks time and changes the color depending if the hour is in the past present or future     

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


// array for dolgin the proper times and display times

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

//save button click event 

var savebtn =  $('.save-btn') 

savebtn.on('click', function(event)
{   
    event.preventDefault(); 
    var clickedBtn = $(this);
    var textArea = clickedBtn.prev().siblings();
    var timeDiv = textArea.prev()
    localStorage.setItem(timeDiv.data("text"), timeDiv.val())
});


displayTimes();