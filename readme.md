## 💧 plop-pack-helpers

<a href="https://npmjs.com/package/@bradgarropy/plop-pack-helpers">
    <img alt="npm" src="https://img.shields.io/npm/v/@bradgarropy/plop-pack-helpers.svg?style=flat-square">
</a>

<a href="https://npmjs.com/package/@bradgarropy/plop-pack-helpers">
    <img alt="npm" src="https://img.shields.io/npm/dt/@bradgarropy/plop-pack-helpers?style=flat-square">
</a>

_A collection of [plop][plop] helpers to make your life easier._

### 📦 Installation

This package is installable from [npm][npm].

```bash
npm install --save-dev @bradgarropy/plop-pack-helpers
```

### 🥑 Usage

Before you can use the `plop-pack`, you have to load it into the `plop` object.

```javascript
plop.load("@bradgarropy/plop-pack-helpers")
```

Once loaded, you now have access the following helpers.

#### `slug`

Creates a slug for any input text.

```javascript
// input
{ title: "This Is An Example Slug" }

// helper
{{slug title}}

// output
"this-is-an-example-slug"
```

#### `date`

Creates a formatted date.

```javascript
// input
{
}

// helper
{
    {
        date
    }
}

// output
;("2020-07-10")
```

#### `list`

Cleans up a comma separated list of values.

```javascript
// input
{ tags: "one, two,  three,  four , five  " }

// helper
{{list tags}}

// output
"one, two, three, four, five"
```

#### `icon`

This helper is very specific to [bradgarropy.com][bradgarropy]. It generates an icon given a topic.

```javascript
// input
{ topic: "coding" }

// helper
{{icon topic}}

// output
"💻"
```

### ❔ Questions

If you have any trouble, definitely [open an issue][issue] and I'll take a look.

If all else fails, you can ask me directly on [Twitter][twitter] or my [AMA][ama].

[plop]: https://plopjs.com
[npm]: https://npmjs.com
[bradgarropy]: https://bradgarropy.com
[issue]: https://github.com/bradgarropy/plop-pack-helpers/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://github.com/bradgarropy/ama
