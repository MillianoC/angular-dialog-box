import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DialogComponent } from "./dialog.component";
import { DialogService } from "../../services/dialog.service";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ DialogComponent ],
    exports: [ DialogComponent ],
    providers: [ DialogService ]
})
export class DialogModule {}
