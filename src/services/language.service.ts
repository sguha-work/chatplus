import {Injectable} from '@angular/core';
import { Events } from 'ionic-angular';
import {FileHandler} from "./fileHandler.service";

@Injectable()
export class LanguageService {
    constructor(private file: FileHandler) {

    }
    public getPresentLanguage(): string {
        return "en";
    }
}