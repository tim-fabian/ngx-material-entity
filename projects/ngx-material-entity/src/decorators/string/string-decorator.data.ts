import { PropertyDecoratorConfig } from '../base/property-decorator.data';

/**
 * Definition for the @string metadata.
 */
abstract class StringDecoratorConfig extends PropertyDecoratorConfig {
    /**
     * How to display the string.
     */
    displayStyle!: 'line' | 'textbox' | 'autocomplete' | 'dropdown';
}

/**
 * The configuration options for a string property displayed as a dropdown.
 */
export interface DropdownStringDecoratorConfig extends StringDecoratorConfig {
    // eslint-disable-next-line jsdoc/require-jsdoc
    displayStyle: 'dropdown',
    /**
     * The values of the dropdown, consisting of a name to display and the actual value
     * Can also receive a function to determine the values.
     */
    // eslint-disable-next-line jsdoc/require-jsdoc
    dropdownValues: { displayName: string, value: string }[]
}

/**
 * The configuration options for a string property displayed in a default text input.
 */
export interface DefaultStringDecoratorConfig extends StringDecoratorConfig {
    // eslint-disable-next-line jsdoc/require-jsdoc
    displayStyle: 'line',
    /**
     * The minimum required length of the string.
     */
    minLength?: number,
    /**
     * The maximum required length of the string.
     */
    maxLength?: number,
    /**
     * A regex used for validation.
     */
    regex?: RegExp
}

/**
 * The configuration options for a string property displayed in a textbox input.
 */
export interface TextboxStringDecoratorConfig extends StringDecoratorConfig {
    // eslint-disable-next-line jsdoc/require-jsdoc
    displayStyle: 'textbox',
    /**
     * The minimum required length of the string.
     */
    minLength?: number,
    /**
     * The maximum required length of the string.
     */
    maxLength?: number
}

/**
 * The configuration options for a string property displayed in a mat-autocomplete input.
 */
export interface AutocompleteStringDecoratorConfig extends StringDecoratorConfig {
    // eslint-disable-next-line jsdoc/require-jsdoc
    displayStyle: 'autocomplete',
    /**
     * The autocomplete values.
     */
    autocompleteValues: string[],
    /**
     * The minimum required length of the string.
     */
    minLength?: number,
    /**
     * The maximum required length of the string.
     */
    maxLength?: number,
    /**
     * A regex used for validation.
     */
    regex?: RegExp
}