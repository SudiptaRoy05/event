console.log("this is Event in DOM");

function makeRed() {
    document.body.style.backgroundColor = 'red';
}


const makeblues = document.getElementById('makeBlue');
makeblues.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


const makePer = document.getElementById('purpleBG');
makePer.onclick = function () {
    document.body.style.backgroundColor = 'purple';
}


const makePink = document.getElementById('make-pink');
makePink.addEventListener('click', makePinks)
function makePinks() {
    document.body.style.backgroundColor = 'pink';
}

const maketomato = document.getElementById('tomato');
maketomato.addEventListener('click', function () {
    document.body.style.backgroundColor = 'tomato';
})

document.getElementById('rod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})