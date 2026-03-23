document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let glucose = document.getElementById("glucose").value;
    let bp = document.getElementById("bp").value;
    let bmi = document.getElementById("bmi").value;

    // Dummy prediction logic (no backend)
    let resultText = "";

    if (glucose > 120 || bmi > 30) {
        resultText = "⚠️ High chance of Diabetes";
    } else {
        resultText = "✅ Low chance of Diabetes";
    }

    document.getElementById("result").innerText = resultText;
});
