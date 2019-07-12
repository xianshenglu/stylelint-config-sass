# @xianshenglu/stylelint-config-sass

![](https://img.shields.io/npm/v/@xianshenglu/stylelint-config-sass.svg)

A stylelint config for sass

## Usage

> npm install --save-dev @xianshenglu/stylelint-config-sass

Then, add `stylelint-config-sass` to the `extends` array in your _.stylelintrc.js_ file. If you want it to override other configs, you would need to put it last.

```json
{
  // ...
  "extends": ["some-other-config-you-use", "@xianshenglu/stylelint-config-sass"]
  // ...
}
```
