export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  server: {
    allowedHosts: ['ec2-13-218-95-118.compute-1.amazonaws.com'],
  },
});
