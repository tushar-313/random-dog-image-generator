let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector('button')
btn.addEventListener('click', async()=>{
let img=document.querySelector('img');
let dis=await dog();
img.setAttribute('src', dis);
});



async function dog(){
    try{
    let res=await axios.get(url);
    return res.data.message;
}
catch(e){
    console.log('Error:',e);
    return 'Error NO Image Found'
}
}

