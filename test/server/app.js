const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const fetch = require('node-fetch');
const cors = require('kcors');
const routes = require('./routes');

const app = new Koa();

app.use(cors());
app.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }));

app.use(async (ctx, next) => {
  console.log(ctx.url);
  try {
    await next();
  } catch (err) {
    logger.error(err);
    this.status = err.status || 500;
    this.body = {
      errors: [{ _global: 'An error has occurred' }],
    };
    this.app.emit('error', err, this);
  }
});

routes(app);

app.listen(3000);
