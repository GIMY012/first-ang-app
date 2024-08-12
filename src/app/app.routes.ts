import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContacComponent } from './contac/contac.component';
import { PortofoliComponent } from './portofoli/portofoli.component';
import { NotFoundComponent } from './not-found/not-found.component';



// export const routes: Routes = [
//     // {path:'',redirectTo:"HomeComponent",pathMatch:'full'},
//     {path:'portfolio',component:PortfolioComponent},
//     {path:'about',component:AboutComponent    },
//     {path:'contact',component:ContactComponent    },
        
  
// ];
export const routes: Routes = [
    // {path:'',component:HomeComponent},
    {path:'',redirectTo:'startFramework',pathMatch:'full'},
    {path:'startFramework/about',component:AboutComponent,title:'about'},
    {path:'startFramework',component:HomeComponent,title:'home'},
    {path:'startFramework/contact',component:ContacComponent,title:'contact'},
    {path:'startFramework/portoflio',component:PortofoliComponent,title:'portfolio'},
    {path:'**',component:NotFoundComponent,title:'404'}
 
]