const buttons = document.querySelector(".buttons");
const randomCount = document.querySelector(".randomCount");


buttons.addEventListener("click", (e) => {
  if(e.target.classList.contains("number")){
    // console.log("pick")
    randomCount.innerHTML = getRandomInt(-100, 100);
    getColor();
  }
  if(e.target.classList.contains("reset")){
    randomCount.innerHTML = 0;
    getColor()
  } 
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getColor(){
  if(randomCount.innerHTML > 0){
    randomCount.style.color = "green";
  } else if (randomCount.innerHTML < 0){
    randomCount.style.color = "red";
  } else {
    randomCount.style.color = "white";
  }
}
