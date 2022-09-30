const { months, dayOfWeek } = require('./utils')

// Birthday & Calculating time difference
const bday = new Date('12/26/94') // get your birthday
const now = new Date()    // get todays date
const diff = now - bday   // calculate the difference in ms
const secs = diff / 1000  // get the seconds
const mins = secs / 60    // get minutes
const hrs = mins / 60     // get hours
const days = hrs / 24     // get days
const yrs = days / 365.25 // get years
console.log('Seconds:', secs)
console.log('Minutes:', mins)
console.log('Hours:', hrs)
console.log('days:', days)
console.log('Years:', yrs)

// Never mutate the source object, always make a copy!

const d = new Date(2019, 0, 10)
const newDate = new Date(d) // Make a new Date from a date
newDate.setMonth(5)

console.log(d) // 10 January 2019
console.log(newDate) // 10 June 2019

// Challenge 1 - Consecutive Dates

function consecutiveDates(startDate, repeatCount, daysOffset) {
    const nextDate = new Date(startDate)
    const consecutiveDates = [ startDate.toLocaleString() ]
    let repetitions = 1
    while (repetitions < repeatCount) {
        nextDate.setDate( nextDate.getDate() + (daysOffset * repetitions))
        consecutiveDates.push(nextDate.toLocaleString())
        repetitions += 1 
    } 
    console.log(consecutiveDates)
  }

  console.log('-----CONSECUTIVE DATES--------')
  consecutiveDates(new Date(2019, 0, 1), 4, 3)

  // CHALLENGE 2 - ORDER DATES 

  function orderDates(dates) {
      
    dates.sort((date1, date2) => date1 - date2);
    console.log(dates.map((date) => date.toLocaleString()))
    return dates
  }

  const date1= new Date('12/24/1994')
  const date2= new Date('1/6/1996')
  const date3= new Date ('4/5/1992')
  const date4= new Date ('10/25/2023')
  console.log('-----ORDER DATES--------')
  orderDates([date1, date2, date3, date4])

  // CHALLENGE 3 - NEXT DATE
  function nextDate(dates) {
    today = new Date()
    dates.push(today)
    const orderedDates = orderDates(dates)
    const todayIndex = orderedDates.indexOf(today)
    const nextDate = orderedDates[todayIndex + 1]
    console.log(` The next date is ${nextDate.toDateString()}.`)
    return(nextDate)
  }

  console.log('-----NEXT DATE--------')
  nextDate([date4, date3, date2, date1])

  // CHALLENGE 4 - BIRTHDAY

  function whensYourBirthday(date) {
    const birthday = new Date(date)
    return `Your birthday is on ${dayOfWeek[birthday.getDay()]}!`
  }

  const myBirthday = new Date('12/26/1994') // 6 - Lucky me my birthday is Saturday!
  console.log('-----CALCULATE BIRTHDAY--------')
  console.log(whensYourBirthday(myBirthday))