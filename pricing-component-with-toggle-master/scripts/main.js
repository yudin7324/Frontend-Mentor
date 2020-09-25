const checkbox = document.getElementById('checkbox');
const monthly = document.getElementsByClassName("monthly");
const annually = document.getElementsByClassName("annually");


function check() {
    for (var i = 0; i < annually.length; i++) {
        if (checkbox.checked == true) {
            monthly[i].style.display = "block";
            annually[i].style.display = "none";
        } else if (checkbox.checked == false) {
            monthly[i].style.display = "none";
            annually[i].style.display = "block";
        }
    }
}

checkbox.addEventListener("click", check);
check();

//* Thanks for the js code Anil Pak https://www.frontendmentor.io/profile/anlpk