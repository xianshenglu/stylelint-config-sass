# @xianshenglu/stylelint-config-sass

![](https://img.shields.io/npm/v/@xianshenglu/stylelint-config-sass.svg)

A stylelint config

## Usage

### For CSS Project

```bash
npm install --save-dev @xianshenglu/stylelint-config-sass
```

Then, add `stylelint-config-sass/css` to the `extends` array in your _.stylelintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  // ...
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/stylelint-config-sass/css"
  ]
  // ...
}
```

### For SCSS Project

```bash
npm install --save-dev @xianshenglu/stylelint-config-sass
```

Then, add `stylelint-config-sass/scss` to the `extends` array in your _.stylelintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  // ...
  "extends": [
    "some-other-config-you-use",
    "@xianshenglu/stylelint-config-sass/scss"
  ]
  // ...
}
```

## Dependencies

This rule is made based on

- [stylelint-config-recommended][stylelint-config-recommended]
- [stylelint-config-standard][stylelint-config-standard]
- [stylelint-config-rational-order][stylelint-config-rational-order]
- [stylelint-config-sass-guidelines][stylelint-config-sass-guidelines] which based on [stylelint-scss][stylelint-scss] for scss config.
- [stylelint-config-prettier][stylelint-config-prettier].

The code style is controlled by [stylelint-config-prettier][stylelint-config-prettier] and other dependencies will take control of the code quality.

[stylelint-config-recommended]: https://github.com/stylelint/stylelint-config-recommended
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard/

[stylelint-config-rational-order]:
[stylelint-config-sass-guidelines]: https://github.com/bjankord/stylelint-config-sass-guidelines
[stylelint-scss]: https://github.com/kristerkari/stylelint-scss
[stylelint-config-prettier]: https://github.com/prettier/stylelint-config-prettier
