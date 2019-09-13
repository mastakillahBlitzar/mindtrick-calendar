import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'mintrick-calendar',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: 'src/global/main.scss',
  plugins: [
    sass(
      {
        injectGlobalPaths: [
          'src/global/_spacing.scss',
        ]
      }
    )
  ]
};
