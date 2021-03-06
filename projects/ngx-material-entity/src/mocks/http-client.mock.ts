/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Observable, of } from 'rxjs';

/**
 * A Mock for the angular http-client. Is needed for testing crud inside a ngx-mat-entity-table.
 */
export class HttpClientMock {
    exampleData: any[];
    constructor(exampleData: any[]) {
        this.exampleData = exampleData;
    }
    post(url: string, body: any): Observable<any> {
        body.id = '1';
        this.exampleData.push(body);
        return of(body);
    }
    get(url: string): Observable<any> {
        return of(this.exampleData);
    }
    patch(url: string, body: any): Observable<any> {
        const id = this.getIdFromUrl(url);
        const res = this.exampleData[this.exampleData.findIndex((e) => e.id === id)];
        for (const key of Reflect.ownKeys(body)) {
            if (res[key]) {
                res[key] = body[key];
            }
        }
        return of(res);
    }
    delete(url: string): Observable<any> {
        this.exampleData.splice(this.exampleData.findIndex((e) => e.id === this.getIdFromUrl(url)), 1);
        return of(undefined);
    }

    /**
     * Gets an id from a request url. Expects the id to be the value after the last slash.
     *
     * @param url - The url to read the id from.
     * @returns The id of the given url.
     */
    private getIdFromUrl(url: string): string {
        const urlSegments: string[] = url.split('/');
        return urlSegments[urlSegments.length - 1];
    }
}