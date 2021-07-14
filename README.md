# Cupid UI
A modern framework for building responsive frontends.

---

## Installation
We have one version of Cupid UI:
- one that supports React ([`@cupid-ui/react`](https://npmjs.com/package/@cupid-ui/react)).

We are slowly working on versions for Vue and Svelte, but encourage those who want to add these packages themselves to this repository.

**If you only need the CSS,** you can use the [`@cupid-ui/css`](https://npmjs.com/package/@cupid-ui/css) repo.

# Usage
You can access all the documentation for Cupid [online](https://designbylunar.github.io/cupid-ui) or via the `docs/` folder.

### Fonts
We recommend using the [Inter](https://rsms.me/inter) fontface by [Rasmus Andersson](https://rsms.me). We use this font while creating every component, but left it unpackaged to make our library much smaller. You can either link to it (`<link rel="stylesheet" media="all" href="https://rsms.me/inter/inter.css" type="text/css">`) or use the [`inter-ui` package on npm.](https://www.npmjs.com/package/inter-ui). If Inter is too large for your solution, we recommend just using the default fonts on the user's device, as these usually still look great.

### Colours
The colours we use are [WCAG AAA compliant](https://webaim.org/articles/contrast/), to help us follow through on one of the three pillars for this framework: accessibility. When using classes to have your own colour scheme, please try to maintain this same contrast to allow people to use your site to the fullest.

## Acknowledgements
This framework was designed and developed by the Lunar Design team, with most of the designs done by [Jack Merrill](https://github.com/jackmerrill) and most of the development by [Matt Ronchetto](https://github.com/doamatto). It is licensed under MIT license which you can find in the root of this repository, inside of the `LICENSE` file.
