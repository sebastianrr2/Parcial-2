import { Component, OnInit } from '@angular/core';
import { CafesService } from '../cafes.service';

@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css']
})
export class CafeDetailComponent implements OnInit {

  cafeID!: String;


  constructor(
    private cafesService: CafesService) { }

    getBook(){
      this.cafesService.getCafes(this.cafeID).subscribe(cafe=>{
        this.cafesService = book;
      })
    }

    ngOnInit() {
      if(this.bookDetail === undefined){
        this.bookId = this.route.snapshot.paramMap.get('id')!
        if(this.bookId){
          this.getBook();
        }
      }
    }

}
