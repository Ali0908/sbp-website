import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { commonCst} from '../../../src/assets/constant/commonCst';
@Component({
selector: 'app-carousel',
templateUrl: './carousel.component.html',
styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
	items = [
		{ 
		title: commonCst.services.VmcInstallation,
		image: '../assets/caroussel/installation_vmc_caroussel.jpg',
		messages: 'Qui culpa nisi id sit id ullamco fugiat eu et. Pariatur nostrud in est elit mollit aliqua exercitation exercitation enim. Aute minim nostrud voluptate consequat aute. Sint labore laboris commodo non reprehenderit est eu.',
	},
		{ 
		title: commonCst.services.thermalInsulation,
		image: '../assets/caroussel/isolation_thermique_caroussel.jpg',
		messages: 	'Minim enim fugiat in culpa est laborum ea amet eiusmod duis culpa Lorem. Et sunt eiusmod pariatur commodo incididunt occaecat adipisicing ex cupidatat non esse quis amet proident. Ad adipisicing culpa dolor voluptate in dolor occaecat. Duis Lorem consequat exercitation aliquip. Cillum Lorem ea qui veniam non fugiat quis aliqua minim.',
		},
		{ title: commonCst.services.restoration,
		image: '../assets/caroussel/ravalement_caroussel.jpg',
		messages: 'Incididunt ut dolore excepteur velit dolore fugiat aliquip Lorem exercitation laborum eiusmod. Ullamco aliquip in ea culpa anim pariatur in dolor esse incididunt do id. Quis consectetur ullamco enim deserunt elit in.',
	},
		{ title: commonCst.services.electricalWork,
		image: '../assets/caroussel/travaux_electricite_caroussel.jpg',
		messages:'Minim aliqua proident aute ullamco ullamco magna. Adipisicing ut esse nisi qui et consequat. Voluptate eiusmod elit veniam ea consectetur nisi ea sint magna dolore excepteur elit anim velit. Eiusmod voluptate nostrud est eu et eu non Lorem exercitation eu. Ullamco non mollit eu qui et officia anim pariatur ut nulla laborum cupidatat. In esse voluptate est ea dolor ullamco minim duis aliqua exercitation est.',
	},
	];
// images = [ 
// 	'../assets/caroussel/installation_vmc_caroussel.jpg',
// 	'../assets/caroussel/isolation_thermique_caroussel.jpg',
// 	'../assets/caroussel/ravalement_caroussel.jpg',
// 	'../assets/caroussel/travaux_electricite_caroussel.jpg',
// ];

// messages = [
// 	'Qui culpa nisi id sit id ullamco fugiat eu et. Pariatur nostrud in est elit mollit aliqua exercitation exercitation enim. Aute minim nostrud voluptate consequat aute. Sint labore laboris commodo non reprehenderit est eu.',
	// 'Minim enim fugiat in culpa est laborum ea amet eiusmod duis culpa Lorem. Et sunt eiusmod pariatur commodo incididunt occaecat adipisicing ex cupidatat non esse quis amet proident. Ad adipisicing culpa dolor voluptate in dolor occaecat. Duis Lorem consequat exercitation aliquip. Cillum Lorem ea qui veniam non fugiat quis aliqua minim.',
	// 'Incididunt ut dolore excepteur velit dolore fugiat aliquip Lorem exercitation laborum eiusmod. Ullamco aliquip in ea culpa anim pariatur in dolor esse incididunt do id. Quis consectetur ullamco enim deserunt elit in.',
// 	'Minim aliqua proident aute ullamco ullamco magna. Adipisicing ut esse nisi qui et consequat. Voluptate eiusmod elit veniam ea consectetur nisi ea sint magna dolore excepteur elit anim velit. Eiusmod voluptate nostrud est eu et eu non Lorem exercitation eu. Ullamco non mollit eu qui et officia anim pariatur ut nulla laborum cupidatat. In esse voluptate est ea dolor ullamco minim duis aliqua exercitation est.',
// ]

protected commonCst = commonCst

	paused: boolean = false;
	unpauseOnArrow: boolean = false;
	pauseOnIndicator: boolean = false;
	pauseOnHover: boolean = true;
	pauseOnFocus: boolean = true;

	@ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;
	constructor() {}

	ngAfterViewInit() {
	  // Check if carousel is defined before accessing it
	if (this.carousel) {
		this.carousel.cycle();
	}
	}

	togglePaused() {
		if (this.carousel) {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}
}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

}
