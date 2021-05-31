const skillSection = document.querySelector('.skills');
const lines = document.querySelectorAll('line');
var html = document.querySelector('.html').style;
var css = document.querySelector('.css').style;
var js = document.querySelector('.js').style;
var python = document.querySelector('.python').style;

const options = {
    threshold: 0.5
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
   entries.forEach(entry => {
    if (entry.isIntersecting){
        html.setProperty('--animation', 'html 2s');
        css.setProperty('--animation', 'css 2s');
        js.setProperty('--animation', 'js 2s');
        python.setProperty('--animation', 'python 2s');
    }
   });
}

observer.observe(skillSection);