import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div class="loader-container">
                <div class="loader"></div>
             </div>`,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent { }
