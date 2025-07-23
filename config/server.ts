export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  server: {
    allowedHosts: ['ec2-54-163-39-211.compute-1.amazonaws.com'],
  },
});
