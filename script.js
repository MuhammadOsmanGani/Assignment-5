let totalCount = 0;
let copyCount = 0;

// heart press counter
document.querySelectorAll('.heartPress').forEach(button => {
    button.addEventListener("click", () => {
        totalCount++;
        document.getElementById("totalHeart").innerText = totalCount;
    });
});