+++
title = "Cards"
description = "Cards are an easy way to display information at a glance, as well as route users to other pages or sites."
date = 2021-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = 'Cards are an easy way to display information at a glance, as well as route users to other pages or sites.'
toc = true
top = false
+++

## HTML Layout
```html
<div class="card">
  <img src="placeholder.jpg" alt="George the goose" />
  <div class="text">
    <h2>George</h2>
    <p>Professional chaos causer</p>
    <a href="#" class="button">
      Learn more
    </a>
  </div>
</div>
```
Images can be omitted safely.

## React Layout
We're currently re-doing how Cards work in React. Documentation will be added soon, but you can see the implementation [below](#more-info)

## Preview
<div class="card">
  <div class="text">
    <h2>George</h2>
    <p>Professional chaos causer. Caused so much chaos the button and image disappeared.</p>
  </div>
</div>

## More info
- [CSS implementation](https://github.com/designbylunar/cupid-ui/blob/main/css/src/layout/card.css)
- [React implementation](https://github.com/designbylunar/cupid-ui/blob/main/react/src/components/layout/card.tsx)

