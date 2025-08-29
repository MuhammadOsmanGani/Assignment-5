let totalCount = 0;
let copyCount = 0;

// heart press counter
document.querySelectorAll('.heartPress').forEach(button => {
    button.addEventListener("click", () => {
        totalCount++;
        document.getElementById("totalHeart").innerText = totalCount;
    });
});
// Copy function
document.querySelectorAll('.copyBtn').forEach(button => {
    button.addEventListener("click", () => {

        button.parentElement.querySelector('.copyBtn').innerHTML = "Copied..";

        copyCount++;
        document.querySelector('.copyCount span').innerText = copyCount;

        const Number = parseInt(button.parentElement.parentElement.querySelector('.copyNum').innerText);
        navigator.clipboard.writeText(Number);


    });
});
// Call History
document.querySelectorAll('.callbtn').forEach(button => {
    button.addEventListener("click", () => {
        const callText = button.parentElement.parentElement.querySelector('.HistoryTitle').innerText;
        const Number = button.parentElement.parentElement.querySelector('.copyNum').innerText;
        const div = document.createElement("div");
        div.innerHTML = ` <div class="flex flex-row justify-between items-center mt-4 px-4 py-4 rounded-lg">
                       <div class="flex flex-col">
                           <p>${callText}</p>
                           <p>${Number}</p>
                       </div>
                       <div><p>${new Date().toLocaleTimeString()}</p></div>
                   </div>`;


        document.querySelector('.callHistory').appendChild(div);
    });
});
