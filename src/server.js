const express - require('express');
const app = express();


// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;



app.get('/', (req, res) => {
	console.log("BANG!!");
});

app.listen(port, host);
