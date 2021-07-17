+++
title = "Modals"
description = "Modals are a powerful way to handle decisions from users, as well as ensure users confirm actions that may have unintended consequences."
date = 2021-07-17
insert_anchor_links = "right"
+++

## HTML Layout
```html
<div class="modal">
  <div class="text">
    <h2>Woah there! Are you sure you want to nuke that country?</h2>
    <p>In the event of total atomic annihilation, we can't save you, because we'll have to pretend we don't know you.</p>
  </div>
  <div class="buttons">
    <a href="#" class="button mono">
      Nevermind
    </a>
    <a href="#" class="button error">
      Delete that nation.
    </a>
  </div>
</div>
```

**Supported statuses:** Success, warning, error, info. Okay to omit.

## React Layout
```tsx
import { Modal, Button } from '@cupid-ui/react';

// [...]

<Modal
  title="Woah there! Are you sure you want to nuke that country?"
  subtext="In the event of total atomic annihilation, we can't save you, because we'll have to pretend we don't know you."
>
  <Button
    title="Nevermind"
    type="mono"
  />
  <Button
    title="Delete that nation"
    type="error"
  />
</Modal>
```

### Parameters
- `title`: Must be a `string`. The main text of the modal (eg. the notice being provided)
- `subtext`: Must be a `string`. The text below the notice (eg. blurb about what the modal's action will cause)
- Children elements: Although not technically passed, you do need to specify a child element to the ``<Modal></Modal>` (eg. `<Button/>` for the modal to interact with)

## Preview
<div class="modal">
  <div class="text">
    <h2>Woah there! Are you sure you want to nuke that country?</h2>
    <p>In the event of total atomic annihilation, we can't save you, because we'll have to pretend we don't know you.</p>
  </div>
  <div class="buttons">
    <a href="#" class="button mono">
      Nevermind
    </a>
    <a href="#" class="button error">
      Delete that nation.
    </a>
  </div>
</div>

## More info
- [CSS implementation](https://github.com/designbylunar/cupid-ui/blob/main/css/src/interaction/modal.css)
- [React implementation](https://github.com/designbylunar/cupid-ui/blob/main/react/src/components/interaction/modal.tsx)
