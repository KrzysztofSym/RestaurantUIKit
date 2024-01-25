const daysDiv = document.querySelector('.days');
let hours = document.querySelector('.hours');

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 2; i <= 20; i++) {
        let number = document.createElement('p');
        number.textContent = i;
        if (i === 4) {
            number.classList.add("active");
        }
        number.classList.add("showUp");
        daysDiv.appendChild(number);
    }
    let showUpP = document.querySelectorAll('.showUp');

    showUpP.forEach((element) => {
        element.addEventListener('click', function () {
            showUpP.forEach((el) => {
                el.classList.remove('active');
            });

            element.classList.add('active');
        });
    });

    showUpP.forEach((element, index) => {
        element.style.animationDelay = (index + 1) * 0.1 + 1 + "s";
    });
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
        newP.innerHTML = `${value.hour} pm`;
        hours.appendChild(newP);
    })
    let showUpP = document.querySelectorAll('.hours p');

    showUpP.forEach((element) => {
        element.addEventListener('click', function () {
            showUpP.forEach((el) => {
                el.classList.remove('active');
            });

            element.classList.add('active');
        });
    });

    showUpP.forEach((element, index) => {
        element.style.animationDelay = (index + 1) * 0.1 + 1 + "s";
    })
}
initApp();