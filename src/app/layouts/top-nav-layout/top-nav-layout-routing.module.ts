import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';
import { WorkspaceComponent } from 'src/app/pages/workspace/workspace.component';
import { TopNavLayoutComponent } from './top-nav-layout.component';

const routes: Routes = [
  {
    path: '',
    component: TopNavLayoutComponent,
    children: [
      {
        path: '',
        component: WorkspaceComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopNavLayoutRoutingModule { }
