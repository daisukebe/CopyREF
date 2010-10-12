
(function(){
    $ = function(text){
	chrome.extension.sendRequest({greeting: text});
    }

    //analyze DOM and get required information
    $(document.title);
	
})();
