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

// chrome . tabs . query ({ active :   true ,  currentWindow :   true },   function ( tabs )   { 
//     chrome . tabs . sendMessage ( tabs [ 0 ]. id ,   { greeting :   "hello" },   function ( response )   { 
//       console . log ( response . farewell ); 
//      }); 
//    });  
  