const daysDiv = document.querySelector('.days');
let hours = document.querySelector('.hours');

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 2; i <= 20; i++) {
        let number = document.createElement('p');
        number.textContent = i;
        if (i === 4) {
            number.classList.add("active");
        }
        daysDiv.appendChild(number);
    }
});

let hourList = [
    {
        id: 1,
        hour: "8:00",
    },
    {
        id: 2,
        hour: "8:30",
    },
    {
        id: 3,
        hour: "9:00",
    },
    {
        id: 4,
        hour: "9:30",
    },
]

let hoursTable = [];
function initApp() {
    hourList.forEach((value, key) =>{
        let newP = document.createElement('p');
        if (key === 1 ) {
            newP.classList.add("active");
        }
        newP.innerHTML = `<p>${value.hour}</p>`;
        hours.appendChild(newP);
    })
}
initApp();