const fs = require('fs');
const sitemap = require('nextjs-sitemap-generator');
const withManifest = require('next-manifest');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);

sitemap({
  baseUrl: 'https://andrebatista.dev',
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'config/meta/',
  nextConfigPath: __dirname + '/next.config.js',
});

const iconSizes = [36, 48, 72, 96, 144, 192];

let icons = [];
iconSizes.forEach((s) => {
  const sizes = `${s}x${s}`;
  icons.push({
    src: `/static/meta/icon-${sizes}.png`,
    type: 'image/png',
    sizes,
  });
});

const manifest = {
  output: './config/meta',
  name: 'André Batista',
  short_name: 'AB',
  description: 'André Batista < @andrewizbatista > React Developer & JavaScript Geek',
  lang: 'en',
  dir: 'ltr',
  start_url: '.',
  display: 'standalone',
  theme_color: '#00f99e',
  orientation: 'portrait-primary',
  background_color: '#333',
  icons,
};

module.exports = withManifest({
  manifest,
  webpack: (config) => {
    const entryOriginal = config.entry;

    config.entry = async () => {
      const entries = await entryOriginal();

      const mainJS = entries['main.js'];
      const polyfills = './app/polyfills.ts';

      if (mainJS && !mainJS.includes(polyfills)) {
        entries['main.js'].unshift(polyfills);
      }

      return entries;
    };

    config.resolve.modules.push('.'); // resolve root imports

    return config;
  },
  exportPathMap: async (defaultPathMap) => {
    let pathMap = defaultPathMap;

    // insert code that generates the routes

    // await copyFile('config/meta/robots.txt', 'out/robots.txt');
    // await copyFile('config/meta/sitemap.xml', 'out/sitemap.xml');
    // await copyFile('config/meta/manifest.json', 'out/manifest.json');

    return pathMap;
  },
});
