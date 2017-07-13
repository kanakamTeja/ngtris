import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NGTrisComponent } from './ngtris.component';

@NgModule({
  declarations: [
    NGTrisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NGTrisComponent
  ],
})
export class NGTrisModule { }
