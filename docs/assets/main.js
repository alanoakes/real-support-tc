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

// multiline svg quotes
function svg_textMultiline() {

  var x = 125;
  var y = 20;
  var width = 250;
  var lineHeight = 20;

  /* get the text */
  var element = document.getElementById('test');
  var text = element.innerHTML;

  /* split the words into array */
  var words = text.split(' ');
  var line = '';

  /* Make a tspan for testing */
  element.innerHTML = '<tspan id="PROCESSING">busy</tspan >';

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var testElem = document.getElementById('PROCESSING');
    /*  Add line in testElement */
    testElem.innerHTML = testLine;
    /* Messure textElement */
    var metrics = testElem.getBoundingClientRect();
    testWidth = metrics.width;

    if (testWidth > width && n > 0) {
      element.innerHTML += '<tspan x=' + x + ' dy="' + y + '">' + line + '</tspan>';
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }

  element.innerHTML += '<tspan x=' + x + ' dy="' + y + '">' + line + '</tspan>';
  document.getElementById("PROCESSING").remove();

}


svg_textMultiline();