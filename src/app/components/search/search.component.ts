import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  input = this.fb.control('', Validators.required)

  constructor(private router:Router, private fb:FormBuilder) { }

  showForecast(){
    if(this.input.valid){
      const city = this.input.value;

      this.router.navigate(['weather'], {
        queryParams:{
          city: city
        }
      });
    }
  }
}
