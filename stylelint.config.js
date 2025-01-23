/** @type {import('stylelint').Config} */
export default {
  /**
   * @see https://stylelint.io/user-guide/rules
   */
  rules: {
    /**
     * Descending
     */
    'no-descending-specificity': true,
    /**
     * Duplicate
     */
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'font-family-no-duplicate-names': true,
    'keyframe-block-no-duplicate-selectors': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    /**
     * Empty
     */
    'block-no-empty': true,
    'comment-no-empty': true,
    'no-empty-source': true,
    /**
     * Invalid
     */
    'color-no-invalid-hex': true,
    'function-calc-no-unspaced-operator': true,
    'keyframe-declaration-no-important': true,
    'media-query-no-invalid': true,
    'named-grid-areas-no-invalid': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'string-no-newline': true,
    /**
     * Irregular
     */
    'no-irregular-whitespace': true,
    /**
     * Missing
     */
    'custom-property-no-missing-var-function': true,
    'font-family-no-missing-generic-family-keyword': true,
    /**
     * Non-standard
     */
    'function-linear-gradient-no-nonstandard-direction': true,
    /**
     * Overrides
     */
    'declaration-block-no-shorthand-property-overrides': true,
    /**
     * Unmatchable
     */
    'selector-anb-no-unmatchable': true,
    /**
     * Unknown
     */
    'annotation-no-unknown': true,
    'at-rule-no-unknown': true,
    'declaration-property-value-no-unknown': true,
    'function-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'media-feature-name-value-no-unknown': true,
    'no-unknown-animations': true,
    'no-unknown-custom-media': true,
    'no-unknown-custom-properties': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'unit-no-unknown': true,
    /**
     * At-rule
     */
    'at-rule-allowed-list': null,
    'at-rule-disallowed-list': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-property-required-list': null,
    /**
     * Color
     */
    'color-hex-alpha': null,
    'color-named': 'always-where-possible',
    'color-no-hex': null,
    /**
     * Comment
     */
    'comment-word-disallowed-list': null,
    /**
     * Declaration
     */
    'declaration-no-important': null,
    'declaration-property-unit-allowed-list': null,
    'declaration-property-unit-disallowed-list': null,
    'declaration-property-value-allowed-list': null,
    'declaration-property-value-disallowed-list': null,
    /**
     * Function
     */
    'function-allowed-list': null,
    'function-disallowed-list': null,
    'function-url-no-scheme-relative': null,
    'function-url-scheme-allowed-list': null,
    'function-url-scheme-disallowed-list': null,
    /**
     * Length
     */
    'length-zero-no-unit': true,
    /**
     * Media feature
     */
    'media-feature-name-allowed-list': null,
    'media-feature-name-disallowed-list': null,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-unit-allowed-list': null,
    'media-feature-name-value-allowed-list': null,
    /**
     * Property
     */
    'property-allowed-list': null,
    'property-disallowed-list': null,
    'property-no-vendor-prefix': true,
    /**
     * Rule
     */
    'rule-selector-property-disallowed-list': null,
    /**
     * Selector
     */
    'selector-attribute-name-disallowed-list': null,
    'selector-attribute-operator-allowed-list': null,
    'selector-attribute-operator-disallowed-list': null,
    'selector-combinator-allowed-list': null,
    'selector-combinator-disallowed-list': null,
    'selector-disallowed-list': null,
    'selector-no-qualifying-type': null,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-allowed-list': null,
    'selector-pseudo-class-disallowed-list': null,
    'selector-pseudo-element-allowed-list': null,
    'selector-pseudo-element-disallowed-list': null,
    /**
     * Unit
     */
    'unit-allowed-list': null,
    'unit-disallowed-list': null,
    /**
     * Value
     */
    'value-no-vendor-prefix': true,
    /**
     * Case
     */
    'function-name-case': 'lower',
    'selector-type-case': 'lower',
    'value-keyword-case': 'lower',
    /**
     * Empty lines
     */
    'at-rule-empty-line-before': 'always',
    'comment-empty-line-before': 'always',
    'custom-property-empty-line-before': 'never',
    'declaration-empty-line-before': 'never',
    'rule-empty-line-before': 'always-multi-line',
    /**
     * Max & min
     */
    'declaration-block-single-line-max-declarations': null,
    'declaration-property-max-values': null,
    'max-nesting-depth': null,
    'number-max-precision': 2,
    'selector-max-attribute': null,
    'selector-max-class': null,
    'selector-max-combinators': 2,
    'selector-max-compound-selectors': 3,
    'selector-max-id': null,
    'selector-max-pseudo-class': 2,
    'selector-max-specificity': null,
    'selector-max-type': 2,
    'selector-max-universal': null,
    'time-min-milliseconds': 0,
    /**
     * Notation
     */
    'alpha-value-notation': 'number',
    'color-function-notation': 'modern',
    'color-hex-length': 'short',
    'font-weight-notation': 'named-where-possible',
    'hue-degree-notation': 'angle',
    'import-notation': 'string',
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'lightness-notation': 'number',
    'media-feature-range-notation': 'context',
    'selector-not-notation': 'complex',
    'selector-pseudo-element-colon-notation': 'double',
    /**
     * Pattern
     */
    'comment-pattern': null,
    'custom-media-pattern': null,
    'custom-property-pattern': null,
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-nested-pattern': null,
    /**
     * Quotes
     */
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'never',
    /**
     * Redundant
     */
    'declaration-block-no-redundant-longhand-properties': true,
    'shorthand-property-no-redundant-values': true,
    /**
     * Whitespace inside
     */
    'comment-whitespace-inside': 'always',
  }
}
