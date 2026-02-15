import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
})
export default class PricingPage implements OnInit{

  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);
  
  ngOnInit(): void {
    // if (isPlatformBrowser(this.platform)) {
    //   document.title = 'Pricing Page';
    // }
    // document.title = 'Pricing Page'
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({name: 'description', content: 'Este es mi Pricing Page'});
    this.meta.updateTag({name: 'og:title', content: 'Pricing Page'});
  }
}
