let props = {
    boxHeight: 200,
    boxWidth: 30,
    boxBG: 'green',
    box1MT: 0,
    ballDiameter: 30,
    ballBG: 'red',
    ballMT: 300,
    ballML: 500,
    ballSpeedX: Math.random()*4 + 4,
    ballSpeedY: Math.random()*4 + 4,
    ballDirX: +1,
    ballDirY: +1
}


let box1 = document.createElement('div');
box1.style.height = props.boxHeight + 'px';
box1.style.width = props.boxWidth + 'px';
box1.style.background = props.boxBG;
box1.style.marginLeft = '20px';

let box2 = document.createElement('div');
box2.style.height = props.boxHeight + 'px';
box2.style.width = props.boxWidth + 'px';
box2.style.background = props.boxBG;
box2.style.right = '20px';

let ball = document.createElement('div');
ball.style.height = props.ballDiameter + 'px';
ball.style.width = props.ballDiameter + 'px';
ball.style.borderRadius = '50%';
ball.style.background = props.ballBG;
ball.style.marginTop = props.ballMT + 'px';
ball.style.marginLeft = props.ballML + 'px';

function track(event) {
    props.box1MT = event.clientY - props.boxHeight/2;
    box1.style.marginTop = props.box1MT + 'px';
}

let interval = setInterval(() => {
    props.ballMT += props.ballSpeedY *  props.ballDirY;
    props.ballML += props.ballSpeedX *  props.ballDirX;

    if (props.ballMT + props.ballDiameter > window.innerHeight || props.ballMT < 0) {
        props.ballDirY *= -1;
    }

    if (props.ballML + props.ballDiameter > window.innerWidth - props.boxWidth - 20) {
        props.ballDirX *= -1;
    }

    if (props.ballML < props.boxWidth + 20 && props.ballMT > props.box1MT && props.ballMT + props.ballDiameter < props.box1MT + props.boxHeight) {
        props.ballDirX *= -1;
    }

    if (props.ballML < 20) {
        alert('You are out');
        clearInterval(interval);
    }


    ball.style.marginTop = props.ballMT + 'px';
    ball.style.marginLeft = props.ballML + 'px';

    box2.style.marginTop = props.ballMT - props.boxHeight/2 + 'px';
}, 10)
document.body.appendChild(box1);
document.body.appendChild(box2);
document.body.appendChild(ball);
