import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/';
import { TranslateModule } from '@ngx-translate/core';
import { WebviewDirective } from './directives/';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule],
})
export class SharedModule {}
