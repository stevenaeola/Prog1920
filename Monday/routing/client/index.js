/* when the form is submitted */
var search_form = document.getElementById('search_form');

search_form.addEventListener('submit', async function(event){
    try{
        event.preventDefault();
        
        /* extract searh term from form */
        
        let keyword = document.getElementById('search_keyword').value
        
    /* send get request */
        
    let response = await fetch('http://127.0.0.1:8090/search?keyword=' + keyword);


    let body = await response.text();
    let results = JSON.parse(body);

    let resultsDiv = document.getElementById('search_results');
    
    results.innerHTML = body;


    for(let result of results){
        let a = document.createElement("a");
        a.setAttribute('href', result.href);
        
        let img = document.createElement("img");
        img.setAttribute('src', result.thumbnail);
        img.setAttribute('alt', result.title);
        a.append(img);
        resultsDiv.append(a);
    }
    }
    catch (e) {
        alert("There was an error " + e);
    }
    /* amend page with results */
//    alert(body);
});

var add_form = document.getElementById('add_form');

add_form.addEventListener('submit', async function(event){
    try{
        event.preventDefault();
        
        /* extract searh term from form */
        
        let title = document.getElementById('new_title').value;
        let url = document.getElementById('new_url').value;
        let thumbnail = document.getElementById('new_thumbnail').value;
        let data = {title, thumbnail, url};
        
    /* send get request */
        
        let response = await fetch('http://127.0.0.1:8090/new',
                                   {
                                       method: 'POST',
                                       body: JSON.stringify(data),
                                       headers: {
                                           'Content-Type': 'application/json'
                                           // 'Content-Type': 'application/x-www-form-urlencoded',
                                       },
                                   });

        alert("Successfully added");
    }
    catch (e) {
        alert("There was an error updating" + e);
    }
    /* amend page with results */
//    alert(body);
});
