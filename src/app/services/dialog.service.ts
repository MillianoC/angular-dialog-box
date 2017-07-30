import { Injectable } from '@angular/core';


@Injectable()
export class DialogService {

    //
    private static dialog: string = null;

    // TODO
    //dialog$: Observable<string>;

    //
    public static getDialog(): string {
        console.log(`run service get: ${this.dialog}`);
        return DialogService.dialog;
    }

    //
    public static setDialog(newDialog: string): string {
        console.log(`run service set: ${newDialog}`);
        // dialog = newDialog;
        // return Promise.resolve(this.dialog);
        DialogService.dialog = newDialog;
        return DialogService.dialog;
    }

    //
    public static clearDialog(): string {
        console.log(`run service clear: ${this.dialog}`);
        DialogService.dialog = null;
        return DialogService.dialog;
    }
}
