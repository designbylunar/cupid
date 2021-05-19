## Building
1. Install [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com)
2. Install dependencies (`yarn`)
3. Build the package (`yarn build`)

## Usage
### Fonts
We recommend using the [Inter](https://rsms.me/inter) fontface by [Rasmus Andersson](https://rsms.me). We use this font while creating every component, but left it unpackaged to make our library much smaller. You can either link to it (`<link rel="stylesheet" media="all" href="https://rsms.me/inter/inter.css" type="text/css">`) or use the [`inter-ui` package on npm.](https://www.npmjs.com/package/inter-ui). The font order of the package is as follows: `Inter var experimental, Inter var, Inter, sans-serif`.

### Colours
The colours we use are [WCAG AAA compliant](https://webaim.org/articles/contrast/), to help us follow through on one of the three pillars for this framework: accessibility. When using classes to have your own colour scheme, please try to maintain this same contrast to allow people to use your site to the fullest.

## Acknowledgements
This framework is licensed under the MIT license, which you can find a copy of in the `LICENSE` file.