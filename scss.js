module.exports = {
  extends: [
    './rules/index.js',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier'
  ],
  rules: {
    //! avoid add stylistic rules
    // todo  reduce to 1 when BEM is determined
    'max-nesting-depth': [
      5,
      {
        ignore: ['pseudo-classes', 'blockless-at-rules'],
        ignoreAtRules: ['each', 'media', 'supports', 'include']
      }
    ],
    'scss/at-import-partial-extension-blacklist': null,
    'scss/at-import-partial-extension-whitelist': ['scss'],
    'scss/dollar-variable-pattern': /--.+/u,
    'scss/partial-no-import': null,
    'scss/double-slash-comment-inline': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/selector-nest-combinators': null,
    'scss/dollar-variable-default': null,
    'scss/at-function-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/at-import-no-partial-leading-underscore': null
  }
}
