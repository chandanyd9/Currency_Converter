let BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode == "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {
  let currCode = element.value;
  // console.log(currCode);
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

window.addEventListener("load",()=>{
   updateExchangeRate();
})

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
  // let amount = document.querySelector(".amount input");
  // let amtval = amount.value;
  // console.log(amtval);
  // if (amtval <= 0 || amtval === "") {
  //   amtval = 1;
  //   amount.value = 1;
  // }
  // const URL = `${BASE_URL}${fromCurr.value.toLowerCase()}.json`;
  // //console.log(URL);
  // let response = await fetch(URL);
  // let data = await response.json();
  // // console.log(data);
  // // console.log(data["usd"]["inr"]);
  // // console.log(data.usd.inr);

  // let from = fromCurr.value.toLowerCase();
  // let to = toCurr.value.toLowerCase();
  // let rate = data[from][to];
  // //console.log(rate);

  // let finalAmt = rate * amtval;
  // console.log(finalAmt);

  //  msgPrint=`${amtval} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
  //  console.log(msgPrint);

  //  msg.innerText=msgPrint;
});

const updateExchangeRate=async()=>{
     let amount = document.querySelector(".amount input");
  let amtval = amount.value;
  console.log(amtval);
  if (amtval <= 0 || amtval === "") {
    amtval = 1;
    amount.value = 1;
  }
  const URL = `${BASE_URL}${fromCurr.value.toLowerCase()}.json`;
  //console.log(URL);
  let response = await fetch(URL);
  let data = await response.json();
  // console.log(data);
  // console.log(data["usd"]["inr"]);
  // console.log(data.usd.inr);

  let from = fromCurr.value.toLowerCase();
  let to = toCurr.value.toLowerCase();
  let rate = data[from][to];
  //console.log(rate);

  let finalAmt = rate * amtval;
  console.log(finalAmt);

   msgPrint=`${amtval} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
   console.log(msgPrint);

   msg.innerText=msgPrint;
}
