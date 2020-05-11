const api_url = 'https://api.funtranslations.com/translate/doge.json?text=Goodmorning';
async function getData(){
    const response = await fetch(api_url);//fetching url
    const data = await response.json();//converting into json
    console.log(data);
}
getData();
