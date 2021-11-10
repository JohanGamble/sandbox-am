import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const config = 'assets/mongodb.json';

@Injectable()
export class ConfigService {
    constructor(private http: HttpClient) { }
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };
    getRequest(): any {
        return this.http.get(config, { headers: this.headers, observe: 'response', responseType: 'json' });
    }
}
