const joke = document.querySelector('#joke');
const button = document.querySelector('button');

const addJoke = async () =>{
    const jokeText = await getJoke();
    console.log(jokeText);
    joke.textContent = jokeText;
}

const getJoke = async function(){
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;

}
addJoke();
button.addEventListener('click', addJoke);