+++
title = "Buttons"
description = "Buttons are something that need no introduction. However, it is hard to carefully create buttons that look good, as well as remains accessible."
date = 2021-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = 'Buttons are something that need no introduction. However, it is hard to carefully create buttons that look good, as well as remains accessible.'
toc = true
top = false
+++

## HTML Layout
```html
<a href="#" class="button">
    Text
</a>
<a href="#" class="button" disabled>
  Text (coming soon)
</a>
<a href="#" class="button mono">
  Text
</a>
<a href="#" class="button mono" disabled>
  Text (coming soon)
</a>
```

**Supported statuses:** Success, warning, error, info. Mono available. Okay to omit.

## React Layout
```tsx
import { 'Button' } from '@cupid-ui/react';

// [...]

<Button
  link="#"
  text="Text"
/>
<Button
  link="#"
  text="Text (coming soon)"
  disabled={true}
/>
<Button
  link="#"
  text="Text"
  type="mono"
/>
<Button
  link="#"
  text="Text (coming soon)"
  type="mono"
  disabled={true}
/>
```

### Parameters
- `title`: Must be a `string`. The text displayed on the button.
- `link` (optional): Must be a `string`. The link the button goes to.
- `type` (optional): Can be `"mono" | "error" | "success" | "warning" | "info"`. Sets the type of button you want.

## Preview
<a href="#" class="button">Text</a>
<a href="#" class="button" disabled>Text (coming soon)</a>
<a href="#" class="button mono">Text</a>
<a href="#" class="button mono" disabled>Text (coming soon)</a>

## More info
- [CSS implementation](https://github.com/designbylunar/cupid-ui/blob/main/css/src/interaction/button.css)
- [React implementation](https://github.com/designbylunar/cupid-ui/blob/main/react/src/components/interaction/button.tsx)

