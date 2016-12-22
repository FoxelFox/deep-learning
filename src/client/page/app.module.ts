import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent }  from './main.component';
import { TextureViewerComponent }  from './texture-viewer.component';
import { MaterialModule } from '@angular/material';

import {NetworkService} from "./network.service"
import {TextureViewerService} from "./texture-viewer.service"

@NgModule({
	imports:      [ BrowserModule, MaterialModule.forRoot() ],
	declarations: [
		MainComponent,
		TextureViewerComponent
	],
	bootstrap:    [ MainComponent ]
})
export class AppModule {
	constructor() {
	}
 }
