export default {
  secret: 	  env('APP_SECRET', 'SomeRandomString69'),
  viewPath: 	env('APP_VIEWS', './app/views'),
  port: 		  env('SERVER_PORT', 8888)
}
