const bubble = document.getElementById("advice");
const adviceIdNo = document.getElementById("adviceNo");
const button = document.getElementById("diceButton");

const renderAdvice = (advice, adviceId) => {
    bubble.textContent = advice;
    adviceIdNo.textContent = adviceId;
}

async function getAdvice() {
    const url = "https://api.adviceslip.com/advice";

    let advice = '';
    let adviceId = '';
    try{
        const response = await fetch(url);
        const data = await response.json();

        advice = data.slip.advice;
        adviceId = data.slip.id;
        console.log(data);
        console.log(advice);
        console.log(adviceId);
    }
    catch(e){
        console.log(e);
    }
    renderAdvice(advice, adviceId);

}

button.addEventListener("click", getAdvice);