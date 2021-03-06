import { Entity } from '../../classes/entity-model.class';
import { AutocompleteStringChipsArrayDecoratorConfigInternal, EntityArrayDecoratorConfigInternal, StringChipsArrayDecoratorConfigInternal } from '../array/array-decorator-internal.data';
import { CheckboxBooleanDecoratorConfigInternal, DropdownBooleanDecoratorConfigInternal, ToggleBooleanDecoratorConfigInternal } from '../boolean/boolean-decorator-internal.data';
import { DefaultNumberDecoratorConfigInternal, DropdownNumberDecoratorConfigInternal } from '../number/number-decorator-internal.data';
import { DefaultObjectDecoratorConfigInternal } from '../object/object-decorator-internal.data';
import { AutocompleteStringDecoratorConfigInternal, DefaultStringDecoratorConfigInternal, DropdownStringDecoratorConfigInternal, TextboxStringDecoratorConfigInternal } from '../string/string-decorator-internal.data';

/**
 * The enum Values for all the different DecoratorTypes.
 */
export enum DecoratorTypes {
    STRING = 'string',
    STRING_DROPDOWN = 'stringDropdown',
    STRING_AUTOCOMPLETE = 'stringAutocomplete',
    STRING_TEXTBOX = 'stringTextbox',
    NUMBER = 'number',
    NUMBER_DROPDOWN = 'numberDropdown',
    BOOLEAN_CHECKBOX = 'boolean',
    BOOLEAN_TOGGLE = 'booleanToggle',
    BOOLEAN_DROPDOWN = 'booleanDropdown',
    OBJECT = 'object',
    ARRAY = 'array',
    ARRAY_STRING_CHIPS = 'arrayStringChips',
    ARRAY_STRING_AUTOCOMPLETE_CHIPS = 'arrayStringAutocompleteChips'
}

/**
 * Gives the metadata-config Type based on the DecoratorTypes enum.
 */
export type DecoratorType<T> =
    T extends DecoratorTypes.STRING ? DefaultStringDecoratorConfigInternal
    : T extends DecoratorTypes.STRING_TEXTBOX ? TextboxStringDecoratorConfigInternal
    : T extends DecoratorTypes.STRING_DROPDOWN ? DropdownStringDecoratorConfigInternal
    : T extends DecoratorTypes.STRING_AUTOCOMPLETE ? AutocompleteStringDecoratorConfigInternal
    : T extends DecoratorTypes.NUMBER ? DefaultNumberDecoratorConfigInternal
    : T extends DecoratorTypes.NUMBER_DROPDOWN ? DropdownNumberDecoratorConfigInternal
    : T extends DecoratorTypes.BOOLEAN_CHECKBOX ? CheckboxBooleanDecoratorConfigInternal
    : T extends DecoratorTypes.BOOLEAN_TOGGLE ? ToggleBooleanDecoratorConfigInternal
    : T extends DecoratorTypes.BOOLEAN_DROPDOWN ? DropdownBooleanDecoratorConfigInternal
    : T extends DecoratorTypes.OBJECT ? DefaultObjectDecoratorConfigInternal<Entity>
    : T extends DecoratorTypes.ARRAY ? EntityArrayDecoratorConfigInternal<Entity>
    : T extends DecoratorTypes.ARRAY_STRING_CHIPS ? StringChipsArrayDecoratorConfigInternal
    : T extends DecoratorTypes.ARRAY_STRING_AUTOCOMPLETE_CHIPS ? AutocompleteStringChipsArrayDecoratorConfigInternal
    : never;