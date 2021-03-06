import { PropertyDecoratorConfig } from '../base/property-decorator.data';

/**
 * Definition for the @number metadata.
 */
abstract class NumberDecoratorConfig extends PropertyDecoratorConfig {
    /**
     * Whether to display the number in a single line or as a dropdown.
     */
    displayStyle!: 'line' | 'dropdown';
}

/**
 * The configuration options for a number property displayed in a default number input.
 */
export interface DefaultNumberDecoratorConfig extends NumberDecoratorConfig {
    // eslint-disable-next-line jsdoc/require-jsdoc
    displayStyle: 'line',
    /**
     * The minimum value of the number.
     */
    min?: number,
    /**
     * The maximum value of the number.
     */
    max?: number
}

/**
 * The configuration options for a number property displayed in a dropdown.
 */
export interface DropdownNumberDecoratorConfig extends NumberDecoratorConfig {
    // eslint-disable-next-line jsdoc/require-jsdoc
    displayStyle: 'dropdown',
    /**
     * The values of the dropdown, consisting of a name to display and the actual value.
     */
    // eslint-disable-next-line jsdoc/require-jsdoc
    dropdownValues: { displayName: string, value: number }[]
}