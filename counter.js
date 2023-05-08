let counter = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;

    //run the countfunction ++ every 1000 millisecond, 
    setInterval(count, 1000);
});