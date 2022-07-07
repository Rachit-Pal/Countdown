function countdown(){
    let value = document.getElementById('input').value
    const countDate = new Date(value).getTime()
    const now = new Date().getTime()//current date .getTime() converts in milliseconds
    const gap = countDate - now

    //How time works
    const second = 1000//1 second has 1000 milliseconds
    const minute = second * 60//1 minute has(60*1000) milliseconds
    const hour = minute * 60//1 hour has (60*60*1000) milliseconds
    const day = hour * 24 //1 day has (24*60*60*100) milliseconds

    //Calculating the shit
    const textDay = Math.floor(gap /day) //Gap Divide by 86400000
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    //Printing to HTML
    document.getElementById('days').textContent = textDay
    document.getElementById('hours').textContent = textHour
    document.getElementById('mins').textContent = textMinute
    document.getElementById('seconds').textContent = textSecond
}
interval = setInterval(countdown, 1000)