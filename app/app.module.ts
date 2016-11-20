import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdInputModule } from '@angular2-material/input';
import { MdIconModule } from '@angular2-material/icon';

import { LoginComponent } from './components/login/app.login';

@NgModule({
    imports: [ BrowserModule, MdButtonModule, MdCardModule, MdProgressBarModule, MdInputModule, MdIconModule ],
    declarations: [LoginComponent],
    bootstrap : [LoginComponent]
})

export class AppModule { }