(function(){
    'use strict';

    const heading = document.querySelector('h1');
    const intro = document.getElementById('intro');
    const answer = document.getElementById('answer');
    const form = document.getElementById('convert');
    const toggle = document.getElementById('toggleUnits');
    let state = "miles-km";

    toggle.addEventListener('click', function(event){
        event.preventDefault();
        answer.innerHTML = "";

        if(state === 'miles-km'){
            state = 'km-miles';
            heading.innerHTML = "Kilometers to miles converter";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
        }

        else if(state === 'km-miles'){
            state = 'miles-km';
            heading.innerHTML = "Miles to kilometers converter";
            intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers."
        }
    });

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if(distance){
            if(state === 'miles-km'){
                const converted = (distance * 1.609344).toFixed(3);
                answer.innerHTML = `${distance} miles converts to ${converted} kilometers`;
            }
            else if(state === 'km-miles'){
                const converted = (distance * 0.621371192).toFixed(3);
                answer.innerHTML = `${distance} kilometers converts to ${converted} miles`;
            }
        }
        else {
            answer.innerHTML = "<h2>Please provide a number!</h2>";
        }
    });

})();