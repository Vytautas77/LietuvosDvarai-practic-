const dvaraiID = localStorage.getItem('DvaraiId')
const delInfo = document.getElementById('delBtn')

const addInfoToScreen =(info)=>{
    const title = document.getElementById('title');
    title.innerHTML = info.title;
    const history = document.getElementById('history');
    history.innerHTML = info.history;
    const address = document.getElementById('address');
    address.innerHTML = 'Adresas: ' + info.address;
    const image = document.getElementById('imgInfo');
    image.src = info.image;
    const wrapperBox = document.getElementById('wrapperBox');
    wrapperBox.innerHTML=info.allHistory
}


const getInfo =async()=>{
    const response = await fetch('https://64e31d8abac46e480e783232.mockapi.io/dvaras/'+dvaraiID);
    const info = await response.json();

addInfoToScreen(info)
}
getInfo()


delInfo.addEventListener('click',async()=>{
try{
    const responce = await fetch('https://64e31d8abac46e480e783232.mockapi.io/dvaras/'+dvaraiID, 
    {
    method: 'DELETE'
  })
const data= await responce.json();
//console.log(data)
if(data){
    const deleteInfo = document.getElementById('deleteInfo');
    deleteInfo.innerHTML = 'INFORMACIJA IŠTRINTA SĖKMINGAI.';

    setTimeout(()=>{
        window.location.replace('./index.html')
    },3000)
}
}catch (err){
    console.log('err', err)
    const deleteInfo = document.getElementById('deleteInfo');
    deleteInfo.innerHTML = 'INFORMACIJA NEIŠTRINTA.';
}}
)
 
