let url="https://catfact.ninja/fact";
let body=document.querySelector("body");
let h2=document.createElement("h2");

async function demo(){
let res=await fetch(url);
let data=await res.json();
h2.innerHTML=data.fact;
body.append(h2);
console.log(data);
}
demo();