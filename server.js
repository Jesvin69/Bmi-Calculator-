let result = document.getElementById("result");
let footer = document.getElementById("footer");
function display() {
    let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value
    height = height / 100;
    let bmiValue = weight / (height * height)
    console.log(bmiValue);

    if (bmiValue <= 18.5) {
        result.innerText = " You are Underweighted";
        result.style.color = "blue";
        footer.innerText = "Underweight (BMI below 18.5) Being underweight can lead to health problems such as fatigue, weakened immunity, frequent illness, and nutritional deficiencies. It may result from poor diet, high metabolism, stress, or medical issues. To gain weight healthily, it's important to eat calorie-dense and nutrient-rich foods like nuts, dairy, whole grains, and healthy fats. Strength training helps build muscle mass, and consulting a doctor or nutritionist can ensure underlying causes are addressed and progress is safe.";
        footer.style.color = "blue";

        footer.style.fontSize = "1.2rem";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        result.innerText = " You are Normal weighted";
        result.style.color = "green";
        footer.innerText = "Normal Weight (BMI 18.5 – 24.9) A normal BMI indicates a healthy weight range that supports overall physical and mental well-being. Individuals in this range typically have a lower risk of chronic diseases like heart issues or diabetes. Maintaining this weight involves eating a balanced diet with fruits, vegetables, whole grains, and lean proteins, staying active with regular exercise, getting proper sleep, and managing stress. The goal is to maintain current habits to support long-term health."
        footer.style.color = "green";
        footer.style.fontSize = "1.2rem";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
        result.innerText = "You are Overweight";
        result.style.color = "orange";
        footer.innerText = "Overweight (BMI 25 – 29.9) Being overweight may increase the risk of conditions such as high blood pressure, type 2 diabetes, and heart disease. This can result from excess calorie intake, sedentary habits, or genetic and hormonal factors. Managing weight in this range involves reducing processed and sugary foods, eating more fiber and whole foods, and increasing physical activity through regular cardio and strength training. Routine medical checkups help monitor overall health and guide progress."
        footer.style.color = "orange";
        footer.style.fontsize = "1.2rem";
    } else if (bmiValue >= 30) {
        result.innerText = "You are Obesity";
        result.style.color = "red";
        footer.innerText = "Obesity (BMI 30 and above) Obesity significantly raises the risk of serious health conditions including heart disease, stroke, diabetes, joint pain, and certain cancers. It is often linked to a combination of overeating, inactivity, emotional factors, and genetic or metabolic issues. Managing obesity requires a structured, calorie-controlled diet and consistent low-impact physical activity like walking or swimming. Medical support is crucial — a doctor or dietitian can help develop a personalized plan, and in some cases, medications or surgery may be considered. The focus is on steady, long-term weight loss for improved quality of life.";
        footer.style.color = "red";
        footer.style.fontSize = "1.2rem";
    } else {
        result.innerText = "Please enter valid values";
        result.style.color = "pink";
        footer.innerText = "Invalid input. Please enter valid height and weight values.";
        footer.style.color = "pink";
        footer.style.fontSize = "1.2rem";
        
}
}