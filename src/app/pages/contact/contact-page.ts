import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'contact-page',
  imports: [],
  templateUrl: './contact-page.html',
})
export default class ContactPage implements OnInit{

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({name: 'description', content: 'Este es mi Contact Page'});
    this.meta.updateTag({name: 'og:title', content: 'Contact Page'});
    this.meta.updateTag({name: 'keywords', content: 'Hola,Mundo,Fernando,Herrera,Curso,Angular,PRO'});
  }
}
