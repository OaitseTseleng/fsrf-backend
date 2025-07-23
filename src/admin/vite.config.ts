import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
      server: {
        host: '0.0.0.0',
        port: 1337,
        allowedHosts: ['ec2-13-218-95-118.compute-1.amazonaws.com'],
      },
    },
  });
};
