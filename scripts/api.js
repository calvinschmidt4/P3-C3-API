// var refresh


/**
 * Fetch API data
 */
function getAPIdata() {
    
    var url = 'https://random.dog/woof.json';

	// construct request      
    var request = url;
	
	// get data
	fetch(request)

	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
        console.log(response);
        onAPISucces(response); 

    })
    
    // catch error
	.catch(function(error) {
		getAPIdata();
		console.error('Request failed', error);
    });
    
    // refresh=setTimeout(getAPIdata,5000);
}

function onAPISucces(response) {
    var dogBox = document.getElementById('dog'),
        media;    
    
    var str = response.url;

    if (str.search('mp4') == -1) {
        // showImage;
        media = '<img id="dogvalues" src="'+response.url+'" />';
        console.log('img');
        dogBox.innerHTML = media;
    }
    else {
        // showVideo;.
        // media = '<video width="320" height="240" controls src="'+response.url+'" </video>';
        getAPIdata();
        console.log('video');
    }; 
}

/**
 * Error
 */
function updateUIError() {
	var dogBox = document.getElementById('dog');
	dogBox.className = 'hidden'; 
}

getAPIdata();