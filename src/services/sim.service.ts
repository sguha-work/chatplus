import {Injectable} from '@angular/core';
import { Sim } from '@ionic-native/sim';
//import {FileHandler} from './filehandler.service';

@Injectable()
export class SimService {
   constructor(private sim: Sim) {
   }

   public getPhoneNumbers(): Promise<any> {
       let phoneNumberArray;
       phoneNumberArray = [];
       return new Promise((resolve, reject) => {
        this.sim.getSimInfo().then((info) => {
                if(info.phoneNumber.toString() === "") {
                    phoneNumberArray.push(info.cards[0].phoneNumber);
                    for(let index=0; index<info.crads.length; index++) {
                        if(typeof info.cards[index] !== "undefined" && typeof info.cards[index].phoneNumber !== "undefined" && info.cards[index].phoneNumber !== "") {
                            phoneNumberArray.push(info.cards[index].phoneNumber)
                        }
                    }
                    if(!phoneNumberArray.length) {
                        reject();
                    }
                    resolve(phoneNumberArray);
                } else {
                    phoneNumberArray.push(info.phoneNumber);
                    resolve(phoneNumberArray);
                }
            }).catch(() => {
                reject();
            });
       });
       
   }

   public requestReadPermission(): Promise<any> {
    return new Promise((resolve, reject) => {
            this.sim.requestReadPermission().then(() => {
                resolve();
            }).catch(() => {
                reject();
            });
    });
    
   }

//    public checkAndPrepareSimInfoIfNotExists() {
//        this.file.readFile("user", "config").then(() => {
//            // good, user file exists
//        }).catch(() => {
//             this.sim.requestReadPermission().then(() => {
//                 this.getSimInfo().then((phoneNumber) => {
//                     let user = {};
//                     user["phoneNumber"] = phoneNumber;
//                         this.file.writeFile("user", JSON.stringify(user), "config");
//                 }, () => {
//                     alert("Permission denied. Import/export will not work");
//                 });
//             }).catch(() => {
//                 alert("Permission denied. Import/export will not work");
//             });
//        });
       
    
//   } 

//    public getUserSIM1Number(): Promise<any> {
//     return new Promise((resolve, reject) => {
//         this.file.readFile("user", "config").then((data) => {
//             let userData = JSON.parse(data);
//             resolve(userData.phoneNumber);
//         }).catch(() => {
//             alert("cannot get user sim1 number. Import/export will not work");
//             reject();
//         });
//     });
//    }
   
}