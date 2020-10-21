const app = express();

app.use(express.static('public'));

app.use(bodyParser.json())


//get update button
const update = document.querySelector('#update-button')
//listed for click on button
update.addEventListener('click', _=> {
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vadar',
            quote: 'I find your lack of faith disturbing.'
          })
    })
});