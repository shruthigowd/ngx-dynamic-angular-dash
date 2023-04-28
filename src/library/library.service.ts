
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IGadget } from '../gadgets/common/gadget-common/gadget-base/gadget.model';

@Injectable()
export class LibraryService{
    env: any;

    constructor(private _http: HttpClient) {
    }

    getLibrary() {
        let libraryJson = '';
          libraryJson = 'library.json';

        return this._http.get<IGadget[]>('/assets/api/' + libraryJson);
    }
  }
