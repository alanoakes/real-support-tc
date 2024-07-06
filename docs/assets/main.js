// run functions when page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    updateDateYear();
});


// this updates the copyright year on the webpage
function updateDateYear() {
    let date = new Date;
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);;
    document.querySelector('#copyrt').textContent = year;
}