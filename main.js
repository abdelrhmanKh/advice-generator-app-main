let advice = document.querySelector(".advice");
let adviceId = document.querySelector(".advice-Id");
let btn = document.querySelector(".get-advice");

function getAdvice() {

    fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
            advice.innerHTML = `“${data.slip.advice}”`;
            adviceId.innerText = data.slip.id;
        }
        );
}
getAdvice()

btn.addEventListener("click", getAdvice)