// function validateForm() {
//         var x = document.forms["myForm"]["search"].value;
//         if (x == "") {
//         alert("Key word be filled out");
//         return false;
//         }
//         x=_meaning(x); // finds the meaning of word x with wiki api...
//         alert("Description: ", x);
    
    
//   }
  
document.getElementById("bId").addEventListener("click", validateForm);

function validateForm(){
    console.log('textInput ', document.getElementById('textInput'));
    var x = document.getElementById('textInput').value;
    console.log('x ', x);
    if (x == "") {
        alert("type a key word from web page!");
        return false;
    }
        // x=_meaning(x); // finds the meaning of word x with wiki api...
    var ans="Description: "+x;
    alert(ans);
}

// document.getElementById('bId').onclick=validateForm();
  