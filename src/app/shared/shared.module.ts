import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GeneralSectionComponent } from './layouts/general-section/general-section.component';
import { ItemSectionComponent } from './layouts/item-section/item-section.component';
import { SearchSectionComponent } from './layouts/search-section/search-section.component';
import { CardsComponent } from './layouts/cards/cards.component';
import { CommentsComponent } from './layouts/comments/comments.component';



@NgModule({
  declarations: [
    HeaderComponent,
    GeneralSectionComponent,
    ItemSectionComponent,
    SearchSectionComponent,
    CardsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    GeneralSectionComponent,
    ItemSectionComponent,
    SearchSectionComponent,
    CardsComponent,
    CommentsComponent]
})
export class SharedModule { }
