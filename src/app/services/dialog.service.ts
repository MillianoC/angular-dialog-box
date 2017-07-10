import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class DialogService implements OnInit {

    //
    dialog: string;

    ngOnInit() {
        this.dialog = null;
    }

    //
    getDialog(): Promise<string> {
        return Promise.resolve(this.dialog);
    }

    //
    setDialog(newDialog: string): Promise<string> {
        this.dialog = newDialog;
        return Promise.resolve(this.dialog);
    }

    //
    clearDialog(): Promise<string> {
        this.dialog = null;
        return Promise.resolve(this.dialog);
    }
}
