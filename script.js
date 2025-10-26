// Basic placeholder for any future interactivity
document.addEventListener('DOMContentLoaded', function () {
  console.log("Website loaded successfully.");
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feeForm");
  const result = document.getElementById("result");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const course = document.getElementById("courseType").value;
      let fee = 0;

      if (course === "6weeks") fee = 300;
      else if (course === "6months") fee = 1200;

      result.textContent = `Your total fee is $${fee}`;
    });
  }
});
// Optional JS: Add interactivity if needed
console.log("Empowering The Nations site loaded.");
