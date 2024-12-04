import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahComponent } from './tambah.component';

const routes: Routes = [
  { path: '', component: TambahComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahRoutingModule { }