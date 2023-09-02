const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://hbo24wrldtx7bcunvjwrerwliu0nhvxf.lambda-url.us-east-1.on.aws/");

        if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status} - ${response.statusText})`);
        }

        let data = await response.json();
        counter.innerHTML = `This page has ${data} Views!`;
    } catch (error) {
        console.error("Error:", error);
        // You can add code here to handle the error, such as displaying a message to the user.
    }
}

updateCounter();
