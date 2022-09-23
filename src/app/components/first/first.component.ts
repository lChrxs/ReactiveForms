import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public loginForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    })
  }

  onSubmit(){
    console.log('Enviado');
    this.loginForm.reset();

    this.loginForm.markAsDirty()
    this.loginForm.markAllAsTouched()

    // console.log(this.loginForm.value)
    // console.log(this.loginForm.value.name)
    // console.log(this.loginForm.get("name"))
    // console.log(this.loginForm.get("name")?.errors)
    // console.log(this.loginForm.get("name")?.hasError('length'))
  }

}
