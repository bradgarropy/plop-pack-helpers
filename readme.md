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

**input**

```javascript
{
    title: "This Is An Example Slug"
}
```

**helper**

```handlebars
{{slug title}}
```

**output**

```javascript
"this-is-an-example-slug"
```

#### `date`

Creates a formatted date.

**input**

```json
{}
```

**helper**

```handlebars
{{date}}
```

**output**

```javascript
"2020-07-10"
```

#### `list`

Cleans up a comma separated list of values.

**input**

```javascript
{
    tags: "one, two,  three,  four , five  "
}
```

**helper**

```handlebars
{{list tags}}
```

**output**

```javascript
"one, two, three, four, five"
```

### ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

[plop]: https://plopjs.com
[npm]: https://npmjs.com
[bradgarropy]: https://bradgarropy.com
[issues]: https://github.com/bradgarropy/plop-pack-helpers/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://github.com/bradgarropy/ama
