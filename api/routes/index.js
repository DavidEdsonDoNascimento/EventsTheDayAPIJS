import cors from 'cors';
import bodyParser from 'body-parser';
import usersRoutes from './users-route';
import categoriesRoutes from './categories-route';
import occurrencesRoutes from './occurrences-route';

export const routes = app => {
    
    app.use(
        cors({ origin: true, credentials: true  }),
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        usersRoutes, 
        categoriesRoutes, 
        occurrencesRoutes
    );

    app.get('/checkapi', (req, res) => {
        return res.status(200).json({ success: true });
    });
}