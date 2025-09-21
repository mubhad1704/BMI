// Gender selection
function selectGender(gender) {
    let maleBtn = document.getElementById("but1");
    let femaleBtn = document.getElementById("but2");

    if (gender === "male") {
        maleBtn.classList.add("border-2", "border-amber-500", "font-semibold");
        maleBtn.classList.remove("border", "border-gray-300", "font-semibold");

        femaleBtn.classList.add("border", "border-gray-300", "font-semibold");
        femaleBtn.classList.remove("border-2", "border-amber-500", "font-semibold");
    } else {
        femaleBtn.classList.add("border-2", "border-amber-500", "font-semibold");
        femaleBtn.classList.remove("border", "border-gray-300", "font-semibold");

        maleBtn.classList.add("border", "border-gray-300", "font-semibold");
        maleBtn.classList.remove("border-2", "border-amber-500", "font-semibold");
    }
}

// BMI calculation
function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.querySelector("input[placeholder='in kgs']").value;
    let result = document.getElementById("result");
    let advice = document.getElementById("advice");

    if (height === "" || weight === "") {
        result.textContent = "--";
        advice.textContent = "Please enter both height and weight.";
        return;
    }

    height = height / 100; // convert cm to m
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1);

    result.textContent = bmi;

    let categories = document.querySelectorAll(".underweight, .healthy, .overweight, .obese");
    categories.forEach(cat => cat.classList.remove(
        "bg-yellow-900", "bg-green-900", "bg-orange-900", "bg-red-900","transform", "translate-y-[-5px]", "text-white"
    ));

    if (bmi < 18.5) {
        let el = document.querySelector(".underweight");
        el.classList.replace("bg-yellow-300", "bg-yellow-900");
        el.classList.add("text-white","transform", "translate-y-[-5px]");
        advice.textContent = "You are underweight. Try eating more calorie-dense foods, exercise to build muscle, and consult a doctor if needed.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        let el = document.querySelector(".healthy");
        el.classList.replace("bg-green-300", "bg-green-900");
        el.classList.add("text-white","transform", "translate-y-[-5px]");
        advice.textContent = "You are at a healthy weight. Maintain a balanced diet, stay active, and continue healthy habits.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        let el = document.querySelector(".overweight");
        el.classList.replace("bg-orange-300", "bg-orange-900");
        el.classList.add("text-white","transform", "translate-y-[-5px]");
        advice.textContent = "You are overweight. Focus on portion control, regular exercise, and reducing processed foods.";
    } else {
        let el = document.querySelector(".obese");
        el.classList.replace("bg-red-300", "bg-red-900");
        el.classList.add("text-white","transform", "translate-y-[-5px]");
        advice.textContent = "You are obese. Start with gradual lifestyle changes, eat whole foods, exercise regularly, and consider professional guidance.";
    }
}

// Reset function
function resetForm() {
    // Clear inputs
    document.getElementById("height").value = "";
    document.querySelector("input[placeholder='in kgs']").value = "";
    document.getElementById("first_name").value = "";

    // Reset gender buttons
    let maleBtn = document.getElementById("but1");
    let femaleBtn = document.getElementById("but2");
    maleBtn.classList.remove("border-2", "border-amber-500", "font-semibold");
    maleBtn.classList.add("border", "border-gray-300", "font-semibold");
    femaleBtn.classList.remove("border-2", "border-amber-500", "font-semibold");
    femaleBtn.classList.add("border", "border-gray-300", "font-semibold");

    // Reset result & advice
    document.getElementById("result").textContent = "--";
    document.getElementById("advice").textContent = "";

    // Reset category colors
    document.querySelector(".underweight").classList.replace("bg-yellow-900", "bg-yellow-300");
    document.querySelector(".healthy").classList.replace("bg-green-900", "bg-green-300");
    document.querySelector(".overweight").classList.replace("bg-orange-900", "bg-orange-300");
    document.querySelector(".obese").classList.replace("bg-red-900", "bg-red-300");

    // Remove highlight classes (text-white + translate effect)
    let categories = document.querySelectorAll(".underweight, .healthy, .overweight, .obese");
    categories.forEach(cat => {
        cat.classList.remove("text-white", "transform", "translate-y-[-5px]");
    });
}

// Attach events
document.addEventListener("DOMContentLoaded", function () {
    let calcBtn = document.querySelector("button.text-white.bg-gradient-to-r.from-green-400");
    let resetBtn = document.querySelector("button.text-white.bg-gradient-to-r.from-red-400");
    calcBtn.addEventListener("click", calculateBMI);
    resetBtn.addEventListener("click", resetForm);
});
