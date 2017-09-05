import { File } from '@ionic-native/file';
import {Injectable} from '@angular/core';
import { Events } from 'ionic-angular';
import {LanguageService} from "./language.service";
import * as messeges from "json!./data/message.data.json";
@Injectable()
export class MessageService {
    constructor(private language: LanguageService) {

    }

    getMessage(messageKey: string): string {
        let appLanguage = this.language.getPresentLanguage();
        return messeges[messageKey][appLanguage];
    }
}