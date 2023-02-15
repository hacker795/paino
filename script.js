const pianoKeys = document.querySelectorAll('.key')


function playsound(newUrl)
{
    console.log(newUrl);
    new Audio(newUrl).play();
}

pianoKeys.forEach((pianoKey, i) =>{
    const number = i < 9 ? '0' + (i+1) : (i+1)
    const newUrl = 'piano_keys/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playsound(newUrl))
})