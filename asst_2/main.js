const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */



/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
    //retrieve whether button is dark or light
    const lightOrDark = btn.getAttribute('class');
    if(lightOrDark === 'dark')
    {
        //go dark, prepare for light
        overlay.style.backgroundColor =  'rgba(0,0,0,0.5)';
        btn.innerHTML = 'Lighten';
        btn.setAttribute('class', 'light');
    }else{
        //go light, prepare for dark
        overlay.style.backgroundColor =  'rgba(0,0,0,0)';
        btn.innerHTML = 'Darken';
        btn.setAttribute('class', 'dark');
    }    
}