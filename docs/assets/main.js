// run functions when page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    updateDateYear();
    hideBtnConsulation();
    hideBtnForm();
});


// this updates the copyright year on the webpage
function updateDateYear() {
    let date = new Date;
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);;
    document.querySelector('#copyrt').textContent = year;
}

// this function determines listing whether to show or hide the form
var ckbxYes = document.getElementById("rsts-yes");
var ckbxNo = document.getElementById("rsts-no");
// var btnNO = document.getElementById("book-consultation");

function hideBtnConsulation() {
  if (ckbxNo.checked === false) {
    $("#book-consultation").hide();
  }
}

function hideBtnForm() {
  if (ckbxYes.checked === false) {
    $(".rstsYES").hide();
  }
}

// if checked no, book a consultation
ckbxNo.addEventListener('change', function() {
  if (this.checked) {
    // console.log("Checkbox is checked..");
    $("#book-consultation").show(1000);
  } else {
    // console.log("Checkbox is not checked..");
    $("#book-consultation").hide(1000);
  }
});


// if checked yes, show form
ckbxYes.addEventListener('change', function() {
  if (this.checked) {
    // console.log("Checkbox is checked..");
    $(".rstsYES").show(1000);
  } else {
    // console.log("Checkbox is not checked..");
    $(".rstsYES").hide(1000);
  }
});
