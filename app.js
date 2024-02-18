import express from 'express';
import compression from 'compression';
import cors from 'cors';
import ejs from 'ejs';
import config from './config.js';
import extendExpressMiddleware from './helpers/express_middleware.js';
import { passportJwtLogin, authMiddleware } from './helpers/auth_middleware.js';
import AuthController from './controllers/auth.js';
import AccountController from './controllers/account.js';
import HomeController from './controllers/home.js';
import ComponentsDataController from './controllers/components_data.js';
import FileUploaderController from './controllers/fileuploader.js';
import S3UploaderController from './controllers/s3uploader.js';
import ReviewsController from  './controllers/reviews.js';
import SaccoController from  './controllers/sacco.js';
import UsersController from  './controllers/users.js';
import VehicesController from  './controllers/vehices.js';


const app = express();

//set view engine use to return Html
app.set('views', 'views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
// compress all responses
app.use(compression({ threshold: 0 }));
//allow cors on localhost
app.use(cors()); // disable when deploy to production
app.use(express.static(config.app.publicDir))
app.use(express.json()) // Parses json, multi-part (file), url-encoded
app.use(express.urlencoded({ extended:true, limit:'50mb' }));
extendExpressMiddleware(app);
app.use(passportJwtLogin);
app.use('/gariapi/', authMiddleware);

//bind page route to the controllers
app.use('/gariapi/', HomeController);
app.use('/gariapi/auth', AuthController);
app.use('/gariapi/account', AccountController);
app.use('/gariapi/reviews', ReviewsController);
app.use('/gariapi/sacco', SaccoController);
app.use('/gariapi/users', UsersController);
app.use('/gariapi/vehices', VehicesController);
app.use('/gariapi/components_data', ComponentsDataController);
app.use('/gariapi/fileuploader', FileUploaderController);
app.use('/gariapi/s3uploader', S3UploaderController);
app.get('*', function(req, res){
    res.status(404).json("Page not found");
});

let port = 8060;
//start app
app.listen(port, () => {
    console.log('Server is up and running on port: ' + port);
});