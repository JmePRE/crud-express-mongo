//client side


//get update button

console.log(document)

update = document.querySelector('#update-button');
console.log(update);

messageDiv = document.getElementById("message")
console.log(messageDiv);

//listed for click on button
/*
update.addEventListener('click', _=> {
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vadar',
            quote: 'I find your lack of faith disturbing.'
          })
    })
}); **/

function replaceYoda() {
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vadar',
            quote: 'I find your lack of faith disturbing.'
          })
    });
    window.location.reload();
}

/**
 function viewYoda() {
    fetch('/', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },

    })


    var query = { name: "yoda"};
		quotesCollection.find(query).toArray()
			.then(results => { //res.render("index.ejs",{ quotes: results });
			console.log(results);
			//res.redirect('/');
		})
			.catch(error => console.error(error));
} */

function deleteVader() {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        //match value
        body: JSON.stringify({
            name: 'Darth Vadar'
        })
  })
  .then(res => {
      if (reponse === 'No quote to delete') {
          messageDiv.textContent = 'No DarthVader quote to delete'
      } else {
          window.location.reload();
      }
  })
  window.location.reload();
}