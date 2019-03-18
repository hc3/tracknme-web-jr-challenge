const express = require('express');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8080;


const app = express();

const locations = [ 
    {
    	"dateTime": "2017-10-12T21:34:15",
		"latitude": -23.962676666666667,
		"longitude": -46.3884785
    },
    {
    	"dateTime": "2017-10-12T21:40:15",
		"latitude": -23.982676666666667,
		"longitude": -46.4084785
    }
];

app.use(cors());
//app.use(express.static('./dist/trackme-web'));

app.get('/api/locations', (req, res) => {
	return res.send(locations);
});

app.listen(port,() => console.log(`Servidor online em: http://locahost:${port}`) );