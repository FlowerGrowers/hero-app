import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// NOTE: 为了解决 双向绑定
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroListComponent],
  // 对应全局引入
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
