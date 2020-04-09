// background.js 

// Called when the user clicks on the browser action. 
chrome . browserAction . onClicked . addListener ( function ( tab )  { 
    // Send a message to the active tab 
    chrome . tabs . query ({ active :  true ,  currentWindow :  true },  function ( tabs )  { 
        var  activeTab  =  tabs [ 0 ]; 
        chrome . tabs . sendMessage ( activeTab . id ,  { "message" :  "clicked_browser_action" }); 
        console.log('message sent');
    });
});

function  getword ( info , tab )   { 
  console . log ( "Word "   +  info . selectionText  +   " was clicked." ); 
//   chrome . tabs . create ({   
//     url :   "http://www.google.com/search?q="   +  info . selectionText
//    }); 
var xmlhttp = new XMLHttpRequest();
  var x=info.selectionText;
  xmlhttp.open("POST", "http://localhost:5000/get_ner");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify({body:x})); // json body
  xmlhttp.onload = function() {
    alert(`description: ${xmlhttp.response} `); // responseText is the server
  };
  alert(info.selectionText);
}

chrome . contextMenus . create ({ 
  title :   "Search: %s" ,  
  contexts : ["page"  , "selection"  , "image"  , "link"],  
  onclick :  getword
 }, function(){
     console.log('menu created');
 });   
