
document.addEventListener('DOMContentLoaded',()=>{
    const location= document.getElementById('location');
    const searchBtn=document.getElementById('searchBtn');
    const weitherInfo=document.getElementById('weitherInfo');


    searchBtn.addEventListener('click',()=>{
        const getLocation= location.value;
        if(getLocation!=='' && getLocation!==null){
            getWeitherData(getLocation);
        
        }
    })

    const getWeitherData=(input)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`)
        .then((response)=> response.json())
        .then((data)=>{
            const temperature= data.main.temp;
            const description=data.weather[0].description;
            const city = data.name;

            const information = `
            <h2>Weither in ${city} </h2>
            <p> temperature ${temperature} C </p>
            <p> description ${description} </p>
            
            `

            weitherInfo.innerHTML=information;
        })
        .catch((error)=>{
            console.log(error)
            weitherInfo.innerHTML=" there is an error that happened when fetching data"
        })
    }
})