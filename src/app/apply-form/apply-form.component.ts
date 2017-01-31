import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css'],
  providers: [AppService]
})
export class ApplyFormComponent implements OnInit {
  name:string;

  constructor(
    private fb: FormBuilder,
    private service: AppService
  ) { }
  formData: any;
  applicant: FormGroup;

  ngOnInit() {
    this.applicant = this.fb.group({
      contactName: ['Tycho Garvinator'],
      contactEmail: ['dev@bennell.biz'],
      contactMsg: [''],
      id: [{value: '22875', disabled: true}]
    });
  }

  setFile(event) {
    const data = new FormData();
    const target = event.srcElement || event.currentTarget || event.target;
    const file = target.files[0];
    data.append('file', file);
    this.formData = data;
    console.log('set file: ', file);
  }

  submit() {
    let form = this.applicant.getRawValue();

    Object.keys(form)
      .forEach(key => this.formData.append(key, form[key]));


    this.service.post(this.formData)
      .subscribe(
        res => console.log(res),
        err => console.error(err)
      );

    this.formData = new FormData();
  }
}
