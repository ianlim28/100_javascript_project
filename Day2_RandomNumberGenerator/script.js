const gen_btn = document.querySelector('.generate');
const gen_num = document.querySelector('.generator-num')

const getRandomNum = () => {
    let num;
    num = Math.floor(Math.random()*101);
    return gen_num.innerHTML = num 
}


gen_btn.addEventListener('click', getRandomNum);