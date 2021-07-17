+++
title = "Cards"
description = "Cards are an easy way to display information at a glance, as well as route users to other pages or sites."
date = 2021-07-17
insert_anchor_links = "right"
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
```tsx
import { Card, Button } from '@cupid-ui/react';

// [...]

<Card
  title="George"
  subtitle="Professional chaos causer"
  image="placeholder.jpg"
  imageDesc="George the goose"
>
  <Button
    title="Learn more"
    link="#"
  />
</Card>
```

### Parameters
- `title`: Must be a `string`. The main text of the card (eg. the name of a project or person)
- `subtitle`: Must be a `string`. The text below the title. (eg. blurb about project or a person's role at a company)
- `reverse` (optional): Must be a `boolean`. If true, the order will be flipped (text and then the image). This has no effect if you are not using an image. 
- `image` (optional): Must be a `string`. The image that appears on the card.
  - `imageDesc`: Must be a `string`. A short description of what's in the image
- Children elements: Although not technically passed, you can specify child elements to the `<Card></Card>` (eg. `<Button/>` for the card to be interacted with)

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

