import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CharacterListComponent } from "src/app/components/character-list/character-list.component";


@NgModule({
    declarations: [],
    imports: [RouterModule.forChild([{ path: '', component: CharacterListComponent }])],

  })
  export class HomeModule { }