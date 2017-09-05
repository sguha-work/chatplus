import { File } from '@ionic-native/file';
import {Injectable} from '@angular/core';
import { Events } from 'ionic-angular';
import {LanguageService} from "./language.service";
import MessegeData from "./data/messege.data";
@Injectable()
export class MessageService {
    constructor(private language: LanguageService) {

    }

    getMessage(messageKey: string): string {
        let appLanguage = this.language.getPresentLanguage();
        return MessegeData[messageKey][appLanguage];
    }
}