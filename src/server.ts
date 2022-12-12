import App from '@/app';
import AuthRoute from '@/routes/api-v1/auth.route';
import IndexRoute from '@/routes/index.route';
import UsersRoute from '@/routes/api-v1/users.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();
