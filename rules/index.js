module.exports = {
  extends: ['stylelint-config-recommended'],
  plugins: ['stylelint-color-format'],
  rules: {
    //! avoid add stylistic rules
    'color-named': 'never',
    'declaration-no-important': true,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-universal': 0,
    'no-unknown-animations': true,
    'selector-class-pattern': null,
    'declaration-property-value-blacklist': null,
    'order/order': null,
    'color-format/format': {
      format: 'rgb'
    }
  }
}
