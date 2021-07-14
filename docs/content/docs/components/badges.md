+++
title = "Badges"
description = "Badges are usually at the end of a headline and used as a way to declare tagging."
date = 2021-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = 'Badges are usually at the end of a headline and used as a way to declare tagging.'
toc = true
top = false
+++

## HTML Layout
```html
<p>Something brand-spanking new! <span class="badge info">New!</span></p>
<p>To show you the power of Lunar Design.. <span class="badge">I made this badge!</span></p>
<h5>Works with baby headers text! <span class="badge warning">George says hi! Run.</span></h5>
```

**Supported statuses:** Success, warning, error, info. Okay to omit.

## React Layout
```tsx
import { Badge } from '@cupid-ui/react';

// [...]

<p>Something brand-spaking new! <Badge text="New!" type="info"/></p>
```

### Parameters
- `text`: Must be a `string`. This is what the badge says.
- `type` (optional): Can be "success" | "warning" | "error" | "info". Sets the type of badge you want.

## Preview
<p>Something brand-spanking new! <span class="badge info">New!</span></p>
<p>To show you the power of Lunar Design.. <span class="badge">I made this badge!</span></p>
<h5>Works with baby headers text! <span class="badge warning">George says hi! Run.</span></h5>

## More info
- [CSS implementation](https://github.com/designbylunar/cupid-ui/blob/main/css/src/layout/badge.css)
- [React implementation](https://github.com/designbylunar/cupid-ui/blob/main/react/src/components/layout/badge.tsx)

