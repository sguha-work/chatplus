import {Injectable} from '@angular/core';
import { Events } from 'ionic-angular';
import {FileHandler} from "./fileHandler.service";
import {SimService} from "./sim.service";

@Injectable()
export class ConfigService {
    constructor(private file: FileHandler, private sim: SimService) {

    }
    private prepareConfigObject(): Promise<any> {
        let configObject: any;
        configObject = {};
        return new Promise((resolve, reject) => {
            this.getPhoneNumberFromSim().then((phoneNumberData) => {
                configObject.phoneNumbers = phoneNumberData;
                configObject.defaultPhoneNumber = phoneNumberData[0];
                
                resolve(configObject);
            }).catch(() => {
                reject();
            });
        });
    }

    private getPhoneNumberFromSim(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.sim.requestReadPermission().then(() => {
                this.sim.getPhoneNumbers().then((phoneNumbersData) => {
                    // phone numbers collected
                    resolve(phoneNumbersData);
                }).catch(() => {
                    // can't read phone number from sim
                    reject();
                });
            }).catch(() => {
                // read permission denied
                reject();
            });
        });
    }

    private writeConfigData(configData): Promise<any> {
        return new Promise((resolve, reject) => {

            this.file.writeFile(JSON.stringify(configData), "config").then(() => {
                // config file write done
                resolve();
            }).catch(() => {
                // config file writing failed
                reject();
            });
        });
    }

    public prepareAndWriteInitialConfigData(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.prepareConfigObject().then((configObject) => {
                this.writeConfigData(configObject).then(() => {
                    // config write done
                    
                    resolve();
                }).catch(() => {
                    // config write failed
                    reject();
                });
            }).catch(() => {
                reject();
            });
        });
    }

    public checkIfConfigFileExists(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.file.checkIfFileExists("config").then((value) => {
               resolve();
            }).catch(() => {
                reject();
            });
        });
        
    }
    public createConfigFolder(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.file.createDirectory("config").then(() => {
                resolve();
            }).catch(() => {
                reject();
            });
        });
    }
    public createDataFolder(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.file.createDirectory("data").then(() => {
                resolve();
            }).catch(() => {
                reject();
            });
        });
    }
}