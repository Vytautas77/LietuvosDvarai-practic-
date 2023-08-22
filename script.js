console.log('dvarai')

const fetchDvarai =async()=>{
const response = await fetch('https://64e31d8abac46e480e783232.mockapi.io/dvaras');
const dvarai = await response.json();
console.log(dvarai);

const dvaraiWrapper = document.getElementById('dvaruWrapper')

dvarai.forEach((dvaras) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'dvrWrapper')
    const titleWrapper= document.createElement('H2');
    titleWrapper.setAttribute('class', 'titleStyle')
    titleWrapper.innerHTML=dvaras.title;
    const historyWrapper = document.createElement('p')
    historyWrapper.innerHTML= dvaras.history;
    const addressWrapper =  document.createElement('p')
    addressWrapper.innerHTML = 'Adresas: ' + dvaras.address;
    const imageUrl = document.createElement('img')
    imageUrl.setAttribute('class', 'imgStyle')
    imageUrl.src = dvaras.image;

    wrapper.append(imageUrl)
    wrapper.append(titleWrapper);
    wrapper.append(historyWrapper);
    wrapper.append(addressWrapper);

    dvaraiWrapper.append(wrapper)

    

});
}
fetchDvarai()

// const dvaras={
//     title: "Alantos dvaras" ,
//     history: "Alantos (Owantha) vardas pirmą kartą istoriniuose šaltiniuose paminėtas 1436 m., kai Lietuvos didysis kunigaikštis Žygimantas Kęstutaitis (1432–1440), pats Alantą dovanų gavęs iš brolio Vytauto Didžiojo, padovanojo dvarą Astikams, – patvirtino Vilniaus kašteliono Kristino Astiko dvaro užrašymą žmonai Onai.",
//     address:  "Parko g. 5, Alanta, Molėtų r.",
//     image: "https://www.infomoletai.lt/data/tourism_objects/orig/Alantos.apylinkes.dronas_01.jpg"
// }
// fetch('https://64e31d8abac46e480e783232.mockapi.io/dvaras', {
//     method: 'POST',
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(dvaras) // Assuming dvaras is defined elsewhere in your code
// })
// .then((response) => response.json())
// .then((data) => console.log(data))

