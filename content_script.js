
(function(){
    $ = function(text){
	chrome.extension.sendRequest({greeting: text});
    }

    // analyze DOM and get required information
    // For example, the following code returns the title
    $(document.title);
	
})();
