const invisBox = document.getElementById("invis-box");
const numberList = document.querySelectorAll(".num");
const submit = document.getElementById("submit");
const yourSelection = document.getElementById("your-selection");
const thankyouState = document.getElementById("thankyou-state");
const rating = document.getElementById("rating");
const rateAgain = document.getElementById("rate-again");
const thankyouHidden = document.querySelector(".thankyou-hidden");

submit.onclick = () => {
  thankyouState.classList.remove("thankyou-hidden");
  invisBox.style.display = "none";
};

numberList.forEach((number) => {
  number.onclick = () => {
    rating.textContent = number.textContent;
  };
});

rateAgain.onclick = () => {
  thankyouHidden.classList.add("thankyou-hidden");
  invisBox.style.display = "block";
};
