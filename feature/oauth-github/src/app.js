import Koa from 'koa';
import path from 'path';
import koaStatic from 'koa-static';
import Route from 'koa-route';
import Oauth from './oauth';

const app = new Koa();
const main = koaStatic(path.join(__dirname + '/../view'));
app.use(Route.get('/oauth/redirect', Oauth));
app.use(main)
app.listen(5000, () => console.log(`✅  The server is running at 5000`))