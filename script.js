const textbox = document.querySelector("input");
const submit = document.querySelector("button");
const state = document.querySelector("h1");

const url = "https://tasty-puce-shawl.cyclic.cloud/check";

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const email = textbox.value;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email}),
  };

  fetch(url, options).then((res) => {
    return res.json();
  }).then(res=>{
     state.innerText=res.message + "\nLast Query: "+textbox.value;
     textbox.value="";
  });
});
