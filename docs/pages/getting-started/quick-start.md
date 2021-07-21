+++
title = "Quick Start"
description = "Settings up Cupid is simple and quick."
date = 2021-07-17
insert_anchor_links = "right"
+++

## Using the hosted versions
You can skip the other steps and add Cupid straight to your site with one line:
```html
<link href="https://unpkg.com/@cupid-ui/css@1.0.0/dist/cupid-ui.css" rel="stylesheet" crossorigin />
```

<Alert title="Heads up!" text="We don't always update the version in that URL. So, check <a href="https://github.com/designbylunar/cupid/releases">for our latest release</a> to ensure you're using the latest version of Cupid." type="warning" />

## Using the Node packages
We're working on packages for Svelte and Vue, but you can still use the offical Node packages for:
- [CSS (`@cupid-ui/css`)](https://www.npmjs.com/package/@cupid-ui/css)
- [React (`@cupid-ui/react`)](https://www.npmjs.com/package/@cupid-ui/react)

## Building from source
You will need:
- [Node.js](https://nodejs.org) v16.x; and:
- [Yarn](https://yarnpkg.com).

From there, you will need to install the dependencies for Cupid. After cloning the repository from GitHub (`git clone https://github.com/designbylunar/cupid-ui cupid/`), run `yarn`. After that finishes, there are a few paths you can take:
- to build the CSS, run `yarn run-script build:css`,
- to build the React components, run `yarn run-script build:react`,
- to build all packages, run `yarn run-script build:all`

For CSS, you will find the compiled CSS in `css/dist/cupid-ui.css`. For React, the components will be in `react/dist/components/...`.

---

Once you have Cupid installed, you're ready to start implementing components
