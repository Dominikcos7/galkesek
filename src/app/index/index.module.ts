import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    HeaderComponent,
    AboutComponent,
    TestimonialsComponent,
  ]
})
export class IndexModule { }
