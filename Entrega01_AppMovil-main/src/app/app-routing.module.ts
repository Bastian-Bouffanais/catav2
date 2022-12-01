import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'maindex',
    loadChildren: () => import('./pages/maindex/maindex.module').then( m => m.MaindexPageModule)
  },
  {
    path: 'havetrip',
    loadChildren: () => import('./pages/havetrip/havetrip.module').then( m => m.HavetripPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'needtrip',
    loadChildren: () => import('./pages/needtrip/needtrip.module').then( m => m.NeedtripPageModule)
  },
  {
    path: 'tripprog',
    loadChildren: () => import('./pages/tripprog/tripprog.module').then( m => m.TripprogPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
