import { File } from '@ionic-native/file';
import {Injectable} from '@angular/core';
import { Events } from 'ionic-angular';

const rootFolderName = "ChatPlus";
const dataFolderName = "data";
const userFolderName = "user";
const configFolderName = "config";

@Injectable()
export class FileHandler {
    
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

    public checkIfFileExists(fileName: string): Promise<any> {
        let directoryPath = this.getDirectoryPath();
        //directoryPath += ("/"+folderName);
        return new Promise((resolve, reject) => {
            this.file.checkFile(directoryPath, fileName).then((value) => {
                resolve(value);
            }).catch(() => {
                reject();
            });
        });
    }

    public createDirectory(directoryName: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let directoryPath = this.getDirectoryPath();
            this.checkIfDirectoryExists(directoryName).then(() => {
                resolve();
            }).catch(() => {
                this.file.createDir(directoryPath, directoryName, false).then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                });
            });
            
        });
    }

    public writeFile(data: string, fileName: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.checkIfFileExists(fileName).then(() => {
                // file already exists, rewriting
            }).catch(() => {
                // file doesn't exists writing

            });
        });
    }
   
}