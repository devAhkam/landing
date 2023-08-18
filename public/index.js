var flag = 0;
print(flag);
function print(flag) {
  var arr = [
    "<img src='offer.jpg'></img>",
   
  ];

 
}
var flag = 0;
print2(flag);
function print2(flag) {
  var arr2 = [
   
  ];

  
}

let loggedIn = false; // Replace this with the actual login status (e.g., true or false)

function toggleDropdown() {
  const dropdown = document.getElementById("dropdown_menu");
  dropdown.classList.toggle("show");
}

function logout() {
  // Add your logout logic here (e.g., clearing session, updating login status, etc.)
  loggedIn = false;
  document.getElementById("user_name").textContent = "Login/Sign Up";
  document.getElementById("login_link").style.display = "block";
  document.getElementById("logout_link").style.display = "none";
}

// Check if the user is logged in and update the dropdown accordingly
window.onload = function () {
  if (loggedIn) {
    document.getElementById("user_name").textContent = "Logged In User"; // Replace with the actual user's name
    document.getElementById("login_link").style.display = "none";
    document.getElementById("logout_link").style.display = "block";
  }
};

var userName = document.getElementById("user_name");
var curr_user_name = localStorage.getItem("user") || "Login/Sign Up";
userName.innerText = curr_user_name;
// console.log(curr_user_name);

var object1={
  name:"Onion",
  price:38.38,
  strike:58,
  qty:1,
}
var object2={
  name:"farm eggs",
  price:199.50,
  strike:220,
  qty:1,
}
var object3={
  name:"Atta",
  price:56.05,
  strike:70,
  qty:1,
}
var object4={
  name:"Idli Dosa",
  price:66.50,
  strike:80,
  qty:1,
}
var object5={
  name:"Harpic",
  price:185,
  strike:200,
  qty:1,
}
var a1= document.getElementById("a1");
a1.addEventListener("click", function(){
  var data=JSON.parse(localStorage.getItem("basket")) || [];
  data.push(object1);
  localStorage.setItem("basket", JSON.stringify(data));
  alert("Product Added in Basket");
  cart_count();
});


var a2= document.getElementById("a2");
a2.addEventListener("click", function(){
  var data=JSON.parse(localStorage.getItem("basket")) || [];
  data.push(object2);
  localStorage.setItem("basket", JSON.stringify(data));
  alert("Product Added in Basket");
  cart_count();
});

var a3= document.getElementById("a3");
a3.addEventListener("click", function(){
  var data=JSON.parse(localStorage.getItem("basket")) || [];
  data.push(object3);
  localStorage.setItem("basket", JSON.stringify(data));
  alert("Product Added in Basket");
  cart_count();
});

var a4= document.getElementById("a4");
a4.addEventListener("click", function(){
  var data=JSON.parse(localStorage.getItem("basket")) || [];
  data.push(object4);
  localStorage.setItem("basket", JSON.stringify(data));
  alert("Product Added in Basket");
  cart_count();
});

var a5= document.getElementById("a5");
a5.addEventListener("click", function(){
  var data=JSON.parse(localStorage.getItem("basket")) || [];
  data.push(object5);
  localStorage.setItem("basket", JSON.stringify(data));
  alert("Product Added in Basket");
  cart_count();
});

cart_count();
function cart_count(){
  var count= document.getElementById("cart_ele");
  var totalcount=JSON.parse(localStorage.getItem("basket"));
  if(totalcount!=null){
    count.innerText=totalcount.length;
    // console.log(totalcount.length);
  }else{
    count.innerText=0;
  }
}