+++
title = "Alerts"
description = "Banner alerts are simple, but need to be crafted carefully to ensure the user understands at a glance what is going on."
date = 2021-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = 'Banner alerts are simple, but need to be crafted carefully to ensure the user understands at a glance what is going on.'
toc = true
top = false
+++

## HTML Layout
```html
<p class="alert success"><strong>Woah!</strong> You did something not good, but great!</p>
<p class="alert warning"><strong>Careful, buster.</strong> No misbheaving!</p>
<p class="alert error"><strong>Uh oh!</strong> George has broken something again.</p>
<p class="alert info">I just wanted to say you look really cool.</p>
```

**Supported statuses:** Success, warning, error, info.

## React Layout
```tsx
import { Alert } from '@cupid-ui/react';

// [...]

<Alert
  title="Woah!"
  text="You did something not good, but great!"
  type="success"
/>
```

### Parameters
- `title` (optional): Must be a `string`. This goes before the rest of the text and is in bold. Solid for a quick detail, followed by more elaborate information about the alert.
- `text`: Must be a `string`. This is what the alert says.
- `type`: Can be `"success" | "warning" | "error" | "info"`. Sets the type of button you want.

## Preview
<p class="alert success"><strong>Woah!</strong> You did something not good, but great!</p>
<p class="alert warning"><strong>Careful, buster.</strong> No misbheaving!</p>
<p class="alert error"><strong>Uh oh!</strong> George has broken something again.</p>
<p class="alert info">I just wanted to say you look really cool.</p>

## More info
- [CSS implementation](https://github.com/designbylunar/cupid-ui/blob/main/css/src/layout/alert.css)
- [React implementation](https://github.com/designbylunar/cupid-ui/blob/main/react/src/components/layout/alert.tsx)
