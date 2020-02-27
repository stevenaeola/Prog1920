/* when the form is submitted */
var form = document.getElementById('search_form');
form.addEventListener('submit', async function(event){
    event.preventDefault();

    /* extract searh term from form */

    let keyword = 
    /* send get request */

    let response = await fetch('http://127.0.0.1:8090/search?keyword=' + keyword);

    let body = await response.text();

    /* amend page with results */
    alert(body);
});
