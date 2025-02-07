const HNow =  new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeZone: "UTC",
    calendar: "islamic"
}).format(new Date())

const GNow = new Date().toLocaleDateString("en-US", {
    dateStyle: "full",
    timeZone: "UTC",
    calendar: "gregory"
})
const DateText = document.getElementById('date')
console.log(HNow)
DateText.innerHTML = HNow + "(" + GNow + ")"