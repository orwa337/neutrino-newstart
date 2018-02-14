module.exports = {
  options: {
    output: 'docs'
  },

  use: [
    ['@neutrinojs/airbnb-base'],
    [
      '@neutrinojs/web',
      {
        style: {
          loaders: [
            {
              loader: 'sass-loader'
            }
          ]
      },
        html: {
          title: 'neutrino-newstart'
        }
      }
    ],
  ]
};
