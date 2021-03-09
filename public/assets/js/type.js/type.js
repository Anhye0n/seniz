document.addEventListener('DOMContentLoaded', function() {
    var intro = new Typed('#intro', {
        strings: ['당신의<br>암기를<br>도와드립니다.'],
        typeSpeed: 150,
        backSpeed: 50,
        fadeOut: true,
        loop: false
    });

    var typed1 = new Typed('#typed1', {
        strings: ['인쇄 공업'],
        typeSpeed: 150,
        backSpeed: 0,
        color: '#ffffff',
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });

    var typed2 = new Typed('#typed2', {
        strings: ['지식'],
        typeSpeed: 150,
        backSpeed: 0,
        color: '#ffffff',
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });

    var typed3 = new Typed('#typed3', {
        strings: ['정보'],
        typeSpeed: 150,
        backSpeed: 0,
        color: '#ffffff',
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });

    var typed4 = new Typed('#typed4', {
        strings: ['수주'],
        typeSpeed: 150,
        backSpeed: 0,
        color: '#ffffff',
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });
});

function prettyLog(str) {
    console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
    if (typed.loop) {
        typed.loop = false;
    } else {
        typed.loop = true;
    }
}
