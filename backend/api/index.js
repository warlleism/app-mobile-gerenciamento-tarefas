
(async () => {
    const Routes = require('../src/routes/routes')
    const bodyParser = require('body-parser')
    const express = require('express')
    const cors = require('cors')
    const app = express()
    const port = 3001

    require('../src/database/index');

    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(bodyParser.json());

    app.use(cors({
        origin: '*'
    }));

    app.listen(port, () => {
        console.log('conectado')
    });

    app.use(Routes);
})();