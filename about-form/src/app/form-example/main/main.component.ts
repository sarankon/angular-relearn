import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  public formStandard: FormGroup
  public isSubmitted: boolean = false

  constructor() {
    this.formStandard = new FormGroup({
      username: new FormControl({value: '', disabled: false}, [Validators.required]),
      password: new FormControl({value: null, disabled: false}, [Validators.required]),
      none: new FormControl({value: null, disabled: false}),
      manual: new FormControl({value: null, disabled: false}, [Validators.required])
    })

    this.formStandard.valueChanges.subscribe((value)=> {
      console.log(value)
    })

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('value')
    console.log('username: ', this.formStandard.controls['username'].value)
    console.log('password: ', this.formStandard.controls['password'].value)
    console.log('valid')
    console.log('username: ', this.formStandard.controls['username'].valid)
    console.log('password: ', this.formStandard.controls['password'].valid)
  }

  onClickFormStandard() {
    this.formStandard.controls

    Object.keys(this.formStandard.controls).forEach((key) => {
      if(this.formStandard.controls[key].invalid) {
        this.formStandard.controls[key].markAsDirty()
      }
    })

    this.formStandard.controls['password'].markAsDirty()
    console.log(this.formStandard.value)
  }

  onClickManual() {
    this.formStandard.controls['manual'].setValue('')
    this.formStandard.controls['manual'].markAsDirty()

  }

  changeSubmit() {
    this.isSubmitted = true
  }

}
