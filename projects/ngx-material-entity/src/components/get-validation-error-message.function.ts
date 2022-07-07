import { NgModel } from '@angular/forms';

/**
 * Generates a default error message for most validation errors.
 *
 * @param model - The ngModel to get the error from.
 * @returns The Validation Error Message to display.
 */
export function getValidationErrorMessage(model: NgModel): string {
    if (model.hasError('matDatepickerParse')) {
        return 'not a valid date';
    }
    else if (model.hasError('email')) {
        return 'not a valid email';
    }
    else if (model.hasError('minlength')) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return `needs to be at least ${model.getError('minlength').requiredLength} characters long`;
    }
    else if (model.hasError('min')) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return `needs to be equal or bigger than ${model.getError('min').min}`;
    }
    else if (model.hasError('max')) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return `needs to be equal or smaller than ${model.getError('max').max}`;
    }
    else if (model.hasError('required')) {
        return 'required';
    }
    else {
        return 'invalid input';
    }
}