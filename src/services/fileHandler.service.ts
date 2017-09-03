import { File } from '@ionic-native/file';
import {Injectable} from '@angular/core';
import { Events } from 'ionic-angular';

const rootFolderName = "ChatPlus";
const dataFolderName = "data";
const userFolderName = "user";
const configFolderName = "config";

@Injectable()
export class FileHandeler {
    
    constructor(private file: File,private event: Events) {
        //this.checkAndCreateDirectory()
    }

    private getDirectoryPath(): string {
        return this.file.dataDirectory + "/" + rootFolderName;
    }

    public checkIfDirectoryExists(directoryName: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let directoryPath = this.getDirectoryPath();
            this.file.checkDir(directoryPath, directoryName).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
                reject();
            });
        });
    }
   
}