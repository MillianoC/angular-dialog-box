import { Component, OnInit } from '@angular/core';

// NOTE: DIALOG_SERVICE_NEED
import { DialogService } from "./services/dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    title: string = 'Dialog Service';

    // NOTE: DIALOG_SERVICE_NEED
    dialog: string = "";

    constructor(
        // NOTE: DIALOG_SERVICE_NEED
        private dialogService: DialogService
    ) {}

    ngOnInit() {

        // NOTE: DIALOG_SERVICE_NEED
        // This will load the default message from the dialogService
        this.getDialog();
    }

    // NOTE: DIALOG_SERVICE_NEED
    getDialog() {
        this.dialog = DialogService.getDialog();
        console.log("run get");
        // this.dialogService.getDialog().then( (dialog) => {
        //     this.dialog = dialog;
        // })
    }

    // NOTE: DIALOG_SERVICE_NEED
    updateDialog(newDialog: string) {
        this.dialog = DialogService.setDialog(newDialog);
        console.log("run set");
        // this.dialogService.setDialog(newDialog).then( (dialog) => {
        //     this.dialog = dialog;
        // })
    }

    // NOTE: DIALOG_SERVICE_NEED
    clearDialog() {
        this.dialog = DialogService.clearDialog();
        console.log("run clear");
    }

}
