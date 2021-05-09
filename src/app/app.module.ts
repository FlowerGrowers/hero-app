/*
 * @Author: your name
 * @Date: 2021-05-09 23:13:06
 * @LastEditTime: 2021-05-09 23:43:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng\hero-app\src\app\app.module.ts
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// NOTE: 为了解决 双向绑定
import { FormsModule } from '@angular/forms';
// NOTE： 通过HTTP与远程服务器通讯的机制
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessageComponent, DashboardComponent,],
  // 对应全局引入
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule,HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
