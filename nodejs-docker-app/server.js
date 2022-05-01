const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('say hello');
})


app.listen(4000, () => {
	console.log('service listening port 4000');
})
