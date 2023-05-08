# d3-ease

> This is a Typescript version from the original [d3-ease](https://www.npmjs.com/package/d3-ease).

[![npm (scoped)](https://img.shields.io/npm/v/@malkiii/d3-ease?label=latest%20version&logo=npm)](https://www.npmjs.com/package/@malkiii/d3-ease)
[![Workflow](https://github.com/malkiii/d3-ease/actions/workflows/release.yml/badge.svg)](https://github.com/malkiii/d3-ease/actions)
[![License](https://img.shields.io/github/license/malkiii/d3-ease)](https://github.com/malkiii/d3-ease/blob/main/LICENSE)

_Easing_ is a method of distorting time to control apparent motion in animation. It is most commonly used for [slow-in, slow-out](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Slow_In_and_Slow_Out). By easing time, [animated transitions](https://github.com/d3/d3-transition) are smoother and exhibit more plausible motion.

The easing types in this module implement the [ease method](#ease_ease), which takes a normalized time _t_ and returns the corresponding “eased” time _tʹ_. Both the normalized time and the eased time are typically in the range [0,1], where 0 represents the start of the animation and 1 represents the end; some easing types, such as [elastic](#easeElastic), may return eased times slightly outside this range. A good easing type should return 0 if _t_ = 0 and 1 if _t_ = 1. See the [easing explorer](https://observablehq.com/@d3/easing) for a visual demonstration.

These easing types are largely based on work by [Robert Penner](http://robertpenner.com/easing/).

## Installing

using **npm**:

```bash
npm i @malkiii/d3-ease
```

using **yarn**:

```bash
yarn add @malkiii/d3-ease
```

## Usage

```ts
import { easeCubic, easeQuad, easeExpInOut } from '@malkiii/d3-ease';

const e1 = easeCubic(1.25);
const e2 = easeCubic(0.83);
const e3 = easeQuad(0.5);
const e4 = easeQuad(1.47);
const e5 = easeExpInOut(5.11);
```

For legacy environments, you can load d3-ease’s javascript UMD bundle from an npm-based CDN such as jsDelivr; a `d3` global is exported:

<!-- prettier-ignore -->
```html
<script src="https://cdn.jsdelivr.net/npm/d3-ease@3"></script>
<script>

  const e1 = d3.easeCubic(0.25);
  const e2 = d3.easeExpInOut(3.75);

</script>
```

## API Reference

See [API reference](https://github.com/d3/d3-ease/blob/main/README.md#api-reference) or [Try d3-ease in your browser](https://observablehq.com/@d3/easing-animations)
