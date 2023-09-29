import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
selector: 'app-carousel',
templateUrl: './carousel.component.html',
styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
images = [ 
	'../assets/caroussel/installation_vmc_caroussel.jpg',
	'../assets/caroussel/isolation_thermique_caroussel.jpg',
	'../assets/caroussel/ravalement_caroussel.jpg',
	'../assets/caroussel/travaux_electricite_caroussel.jpg',
];

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
