console.log('labas')
const btn = document.getElementById('btn')

btn.addEventListener ('click', async ()=>{

const InputTitle = document.getElementById('InputTitle').value
const inputHistory =document.getElementById('inputHistory').value
const inputAddress=document.getElementById('inputAddress').value
const inputImg=document.getElementById('inputImg').value
const inputAllHistory=document.getElementById('inputAllHistory').value


const inputDvaras={
    title: InputTitle ,
    history: inputHistory,
    address:  inputAddress,
    image: inputImg,
    allHistory: inputAllHistory
}
try{

const responce = await fetch('https://64e31d8abac46e480e783232.mockapi.io/dvaras', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputDvaras) 
})
const data= await responce.json();

if(data){
    const responseWrapper = document.getElementById('responseWrapper');
    responseWrapper.innerHTML = 'Duomenys įvesti sėkmingai.';

    setTimeout(()=>{
        window.location.replace('./index.html')
    },3000)
}
}catch(err){
    console.log('err', err)
    const responseWrapper = document.getElementById('responseWrapper');
    responseWrapper.innerHTML = 'Duomenys įvesti NESĖKMINGAI.';
}
})
