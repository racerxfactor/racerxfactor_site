$(function() 
{
    //listen for the height of the iframe
    if (window.addEventListener) {
        window.addEventListener ("message", receiveMessage, false);        
    } else {
        if (window.attachEvent) {
            window.attachEvent("onmessage", receiveMessage, false);
        }
    }

    function receiveMessage(event)
    {
        //stop if the event has an origin we don't expect
        if (event.origin !== "http://martin.dev") {
            return;
        }
        
        //get the height of the iframe
        var height = event.data;
        
        //set the height on the iframe
        //to be more correct, set the padding on its parent (to keep it responsive)
        $(".embedContainer").css("padding-bottom", height + "px");
    }
});