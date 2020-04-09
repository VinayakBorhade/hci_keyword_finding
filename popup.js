// function validateForm() {
//         var x = document.forms["myForm"]["search"].value;
//         if (x == "") {
//         alert("Key word be filled out");
//         return false;
//         }
//         x=_meaning(x); // finds the meaning of word x with wiki api...
//         alert("Description: ", x);
    
    
//   }

function _meaning(word){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    console.log('inside meaning');
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var ans="ans description " + this.responseText;
            console.log("request complete res ", ans);
            alert(ans);
            // document.getElementById("meaning")=ans;
        }
    }; 
    xmlhttp.open("POST", "http://localhost:5000/get_ner");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({body:word})); // json body
    
}
  
document.getElementById("bId").addEventListener("click", validateForm);

function validateForm(){
    
    
    console.log('textInput ', document.getElementById('textInput'));
    var x = document.getElementById('textInput').value;
    console.log('x ', x);
    if (x == "") {
        alert("type a key word from web page!");
        return false;
    }
        // _meaning(x); // finds the meaning of word x with wiki api...
    // var ans="Description: "+x;
    // alert(ans);
    // alert('inside validate');
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    console.log('inside meaning');
    var ans=".";
    // xmlhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         var ans="description " + this.responseText;
    //         console.log("request complete res ", ans);
    //         alert(ans);
    //     }
    // }; 
    xmlhttp.open("POST", "http://localhost:5000/get_ner");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({body:x})); // json body
    xmlhttp.onload = function() {
        alert(`description: ${xmlhttp.response} `); // responseText is the server
        
    };
      console.log('inside');
      
    // alert('req sent');
    // alert('req sent');
    // while(1){
    //     if(ans==="."){
    //         continue;
    //     }
    //     alert(ans);
    //     break;
    // }
}

// document.getElementById('bId').onclick=validateForm();
  