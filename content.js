// alert("Hello from your Chrome extension!")
// var firstHref = $("a[href^='http']").eq(0).attr("href");
var obj={"key": {"k2": "v2"}};
console.log(obj);

console.log('inside content.js');
chrome . runtime . onMessage . addListener ( 
    function ( request ,  sender ,  sendResponse )  { 
        // console.log('content.js called, request', request);
        
      if (  request.message  ==  "clicked_browser_action"  )  { 
        //   console.log('inside if');
        // var  firstHref  =  $ ( " a[href^='http'] " ). eq ( 0 ). attr ( " href " ); 
        // console . log ( firstHref );
        alert('extension icon clicked!!!');
      } 
    } 
  );

// $( "*" ).each(function( index ) {
//     $( this ).append(' ');
// });

// let cloneBody = $('body').clone().find('script').remove().end().find('style').remove().end();
// var str = cloneBody.text();
// //Of course you have to trim duplicated blank spaces.
// str = str.replace(/\s\s+/g, ' ');
// console.log('body str ', str);
// // $('#new').text(str);
// // console.log(firstHref);



// $("body").click(function(){
//     var s = window.getSelection();
//     s.modify('extend','backward','word');        
//     var b = s.toString();

//     s.modify('extend','forward','word');
//     var a = s.toString();
//     s.modify('move','forward','character');
//     var c=b+a;
//     // c=_meaning(c); // _meaning() is the api call to wiki to get the keyword description
//     // alert(b+a);
// });
