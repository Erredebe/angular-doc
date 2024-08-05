import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage/storage.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [StorageService],
  exports: [],
})
export class CoreModule {}