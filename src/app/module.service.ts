import { Injectable } from '@angular/core';


import { ModuleRichTextAreaComponent } from './module-richtextarea/module-richtextarea.component'
import { ModulePostsListingComponent } from "./module-posts-listing/module-posts-listing.component"
import { ModuleWheretostartComponent } from './module-wheretostart/module-wheretostart.component'
import { ModulePostDetailsComponent } from "./module-post-details/module-post-details.component"

@Injectable({
	providedIn: 'root'
})

/**
 * Use this service to define all of the components that work as Agility Modules
 */
export class ModuleService {

	constructor() { }

	getModule(moduleName: string) {
		switch (moduleName.toLowerCase()) {
			case "richtextarea":
				return ModuleRichTextAreaComponent;
			case "wheretostart":
				return ModuleWheretostartComponent;
			case "postslisting":
				return ModulePostsListingComponent;
			case "postdetails":
				return ModulePostDetailsComponent;
		}

		return null

	}
}