import cors from 'cors';
import bodyParser from 'body-parser';
import usersRoutes from './usersRoutes';
import categoriesRoutes from './categoriesRoutes';
import occurrencesRoutes from './occurrencesRoutes';

export const routes = app => {
    
    app.use(
        cors({ origin: true, credentials: true  }),
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        usersRoutes, 
        categoriesRoutes, 
        occurrencesRoutes
    )

    app.get('/checkapi', (req, res) => {
        return res.status(200).json({ success: true })
    })
}