// alert("Hello from your Chrome extension!")
// var firstHref = $("a[href^='http']").eq(0).attr("href");
var obj={"key": {"k2": "v2"}};
console.log(obj);

$( "*" ).each(function( index ) {
    $( this ).append(' ');
});

let cloneBody = $('body').clone().find('script').remove().end().find('style').remove().end();
var str = cloneBody.text();
//Of course you have to trim duplicated blank spaces.
str = str.replace(/\s\s+/g, ' ');
console.log('body str ', str);
// $('#new').text(str);
// console.log(firstHref);

console.log('inside content.js');
chrome . runtime . onMessage . addListener ( 
    function ( request ,  sender ,  sendResponse )  { 
        // console.log('content.js called, request', request);
        
      if (  request.message  ==  "clicked_browser_action"  )  { 
        //   console.log('inside if');
        var  firstHref  =  $ ( " a[href^='http'] " ). eq ( 0 ). attr ( " href " ); 
        console . log ( firstHref );
        alert('extension icon clicked!!!');
      } 
    } 
  ); 
  
// chrome . runtime . onMessage . addListener ( 
//     function ( request ,  sender ,  sendResponse )   { 
//      console . log ( sender . tab  ? 
//                   "from a content script:"   +  sender . tab . url  : 
//                   "from the extension" ); 
//       if   ( request . greeting  ==   "hello" ) 
//        sendResponse ({ farewell :   "goodbye" }); 
//     });  
 