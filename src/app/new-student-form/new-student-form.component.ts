import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';  
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-student-form',
  templateUrl: './new-student-form.component.html',
  styleUrls: ['./new-student-form.component.css']
})
export class NewStudentFormComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
 
  public mode = 'add'; //default mode
  private id: string; //student ID
 
  onSubmit(){
    console.log("You submitted: " + this.firstName + " " + this.lastName);
    if(this.mode == 'add')
      this._myService.addStudents(this.firstName ,this.lastName);
    if(this.mode == 'edit')
      this._myService.updateStudent(this.id,this.firstName ,this.lastName);

    this.router.navigate(['/listStudents']);
  }

  constructor(private _myService: StudentService, private router:Router, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id'))
        { this.mode = 'edit'; /*request had a parameter _id */ 
          this.id = paramMap.get('_id');}
      else {this.mode = 'add';
          this.id = null; }
    });
 
  }

}
