const contact = document.querySelector('#contac')
const dateTitle = document.querySelector("#date-responsive")


function timeZone(time){
    const today = new Date()
    hour = today.getHours()
    minute = today.getMinutes()
    second = today.getSeconds()

    
    const timeText = `Time: ${hour}:${minute}:${second}` 

    return dateTitle.innerHTML = `${timeText}`;
}

setInterval(timeZone, 500)