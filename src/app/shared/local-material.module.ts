import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule, MatButtonModule } from "@angular/material";
import { MatNativeDateModule } from "@angular/material";

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatNativeDateModule
  ]
})
export class LocalMaterialModule {}
