import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

    //
    private static dialog: string = null;

    //
    public static getDialog(): string {
        console.log("run service get");
        return DialogService.dialog;
    }

    //
    public static setDialog(newDialog: string): string {
        console.log("run service set");
        // dialog = newDialog;
        // return Promise.resolve(this.dialog);
        DialogService.dialog = newDialog;
        return DialogService.dialog;
    }

    //
    public static clearDialog(): string {
        console.log("run service clear");
        DialogService.dialog = null;
        return DialogService.dialog;
    }
}
