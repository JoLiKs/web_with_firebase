import {database} from "./fire.js";
let score = 0;

window.onload = () => {
    console.log("start")
    let lang = navigator.language || navigator.userLanguage;
    lang = lang.split('-')[0]
    fetch('./lang.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ой, ошибка в fetch: ' + response.statusText);
    }
    return response.json();
  })
  .then(jsonData => {
      console.log('lang loaded!')
      console.log(jsonData)
      console.log(lang)
      window.lang = jsonData[lang]
  console.log(jsonData[lang])
  })


  .catch(error => console.error('Ошибка при исполнении запроса: ', error));
}
document.getElementById('coin').addEventListener('click', function() {

    score++;

    const starCountRef = database.ref('users/test');

        // Example of updating data
        starCountRef.set({
            scores: score
        });

        // Example of reading data
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        });

    document.getElementById('score').innerText = `${window.lang['coins']}: ${score}`
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = '';
    }, 10);
});
