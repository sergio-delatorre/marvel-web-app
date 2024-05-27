import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BitacoraComponent } from "src/app/components/bitacora/bitacora.component";
import { CharacterListComponent } from "src/app/components/character-list/character-list.component";


@NgModule({
    declarations: [],
    imports: [RouterModule.forChild([
        { path: '', component: CharacterListComponent },
        { path: 'bitacora', component: BitacoraComponent },
    ])],

  })
  export class HomeModule { }