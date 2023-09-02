const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://hbo24wrldtx7bcunvjwrerwliu0nhvxf.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();