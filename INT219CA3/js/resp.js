// burger = document.querySelectorAll('.burger');
// navbar = document.querySelectorAll('.navbar');
// navlist = document.querySelectorAll('.nav-list');
// rightNav = document.querySelectorAll('.rightnav');

// burger.addEventListener("click", ()=>{
//     rightNav.classList.toggle('v-class');
//     navlist.classList.toggle('v-class');
//     navbar.classList.toggle('h-nav');
// });

// let btn = document.getElementById("btnn");
// btn.addEventListener("click", function(){
//     let name = document.getElementById("name").value;
//     let mobile = document.getElementById("mobile").value;
//     let email = document.getElementById("email").value;
//     let text = document.getElementById("text").value;

//     if(name == "" || mobile=="" || email=="" || text==""){
//         swal ( "Oops" ,  "Please fill your details" ,  "error" );

//     }
//     else{
//         swal ( "Received!" ,  "We will get back to you shortly." ,  "success" );

//     }
// })

// function sweetalertclick(){
//     swal("This functionality will be available soon!", {
//         buttons: false,
//         timer: 3000,
//       });
// }

// function subscribe(){
//     swal({
//         buttons: [true, "Subscribe"],
//       });
// }

burger = document.getElementsByClassName('.burger');
navbar = document.getElementsByClassName('.navbar');
navlist = document.getElementsByClassName('.nav-list');
rightNav = document.getElementsByClassName('.rightnav');

for (var i = 0 ; i < burger.length; i++) {
   burger[i].addEventListener('click' , ()=>{
    rightNav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
});
}

let btn = document.getElementById("btnn");
btn.addEventListener("click", function(){
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let text = document.getElementById("text").value;

    if(name == "" || mobile=="" || email=="" || text==""){
        swal ( "Oops" ,  "Please fill your details" ,  "error" );

    }
    else{
        swal ( "Received!" ,  "We will get back to you shortly." ,  "success" );

    }
})

function sweetalertclick(){
    swal("This functionality will be available soon!", {
        buttons: false,
        timer: 3000,
      });
}

function subscribe(){
    swal({
        buttons: [true, "Subscribe"],


      });
}

// const SearchHere = ()=>{
// let filter = document.getElementById('search').value.toUpperCase();
// }

