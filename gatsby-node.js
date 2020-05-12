/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        TweenLite: path.resolve(
          'node_modules',
          'gsap/src/minified/TweenLite.min.js'
        ),
        TweenMax: path.resolve(
          'node_modules',
          'gsap/src/minified/TweenMax.min.js'
        ),
        TimelineLite: path.resolve(
          'node_modules',
          'gsap/src/minified/TimelineLite.min.js'
        ),
        TimelineMax: path.resolve(
          'node_modules',
          'gsap/src/minified/TimelineMax.min.js'
        ),
        ScrollToPlugin: path.resolve(
          'node_modules',
          'gsap/src/minified/plugins/ScrollToPlugin.min.js'
        )
      }
    }
  });
};
