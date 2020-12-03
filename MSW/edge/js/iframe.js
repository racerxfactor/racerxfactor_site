//run when everything has loaded (images, css, js, etc)
$(window).load(function()
{
    //variables
    var resizeTimer;
    
    //send height to parent
    sendHeight();  
    
    //on resize re-send the height
    //use a timer so not to send loads of message
    $(window).on("resize", function()
    {
        clearTimeout(resizeTimer);
        
        resizeTimer = setTimeout(sendHeight, 100);      
    });
    
    //send height to parent
    function sendHeight()
    {
        //get the height
        var height = $('body').height();
        
        //send it to the parent
        parent.postMessage(height, "http://martin.dev");
    }
});