const btnOn = document.querySelector('.on');
const btnOff = document.querySelector('.off');
const balls = document.querySelectorAll('.item');


for (let i = 0; i < balls.length; i++) {
    btnOn.addEventListener('click', () => {
        console.log('running');
        balls[i].removeAttribute('style');
        balls[i].animationPlayState = 'running';
    });
};

for (let i = 0; i < balls.length; i++) {
    btnOff.addEventListener('click', () => {
        balls[i].style.animationPlayState = 'paused';
        balls[i].style.background = '#3f3d52';
        console.log('paused');
    });
};


