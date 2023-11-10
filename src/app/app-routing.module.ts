import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  {path:"skills",component:SkillsComponent},
  {path:"home",component:HomeComponent},
  {path:"work",component:WorkComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
