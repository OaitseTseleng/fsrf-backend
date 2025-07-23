// path: ./config/plugins.ts

export default ({ env }) => ({
  // … you can keep other plugin configs here …

  // 1. Email plugin configuration
  email: {
    config: {
      // 2. Choose your provider (e.g. 'sendgrid', 'mailgun', 'ses', etc.)
      provider: 'sendgrid',

      // 3. Provider-specific options
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },

      // 4. Global settings for your outgoing emails
      settings: {
        defaultFrom: 'no-reply@gimbl3.com',
        defaultReplyTo: 'otseleng@gimbl3.com',
      },
    },
  },

  // … any other plugins …
});
