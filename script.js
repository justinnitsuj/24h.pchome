let more_btn = document.querySelector('.btn-clk');
let loginNext = document.querySelector('.login-next');
more_btn.addEventListener('click', function() {
    loginNext.style.display = 'block';
    more_btn.style.display = 'none';
});

let continuous_btn = document.querySelector('.l-btn');
continuous_btn.addEventListener('click',function () {
    window.location.href = 'https://www.youtube.com/watch?v=_e9yMqmXWo0';
});

