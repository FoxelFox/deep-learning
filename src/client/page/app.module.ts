import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent }  from './main.component';
import { TextureViewerComponent }  from './texture-viewer.component';


@NgModule({
	imports:      [ BrowserModule ],
	declarations: [
		MainComponent,
		TextureViewerComponent
	],
	bootstrap:    [ MainComponent ]
})
export class AppModule { }
