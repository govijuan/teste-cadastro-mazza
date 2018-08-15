import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastrosService } from '../cadastros.service';

@Component({
  selector: 'cadastro-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [CadastrosService]
})
export class FormComponent implements OnInit {

  cadastroForm: FormGroup;
  
  submitted:boolean = false;
  listaCadastros:any[];
  constructor(private _cadastrosService: CadastrosService, private fb: FormBuilder) { 
    this.cadastroForm = this.fb.group({
      name: [null, Validators.required],
      cpf: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required]
    });
   }

  onSubmit() {
    console.log(this.cadastroForm.value);
    this.listaCadastros.push(this.cadastroForm.value)
    this.submitted = true;
    this.cadastroForm.reset();
  }   

  apagarCadastro (name) {
    console.log(name);

    for(var i = 0; i < this.listaCadastros.length; i++){
      if(this.listaCadastros[i]['name'] == name){
        this.listaCadastros.splice(i, 1);
      }
    }
  }

  voltaParaNovoCadastro() {
    this.cadastroForm.value.name = "";
    this.cadastroForm.value.cpf = "";
    this.cadastroForm.value.phone = "";
    this.cadastroForm.value.email = "";
    this.submitted = false;
  }
  verListaCadastros(){
    this.submitted = true;
  }
  ngOnInit() {
    this._cadastrosService.getCadastrosPre()
    .subscribe(
      (resCadastrosData: any[]) => {
        this.listaCadastros = resCadastrosData;
      },
      error => alert(error),
      () => {
        console.log(this.listaCadastros);
      }
    );
    /*this.cadastroForm = new FormGroup({
      fullName: new FormControl('', {
        validators: Validators.required
      }),
      cpf: new FormControl('', {
        validators: Validators.required
      }),
      phone: new FormControl('', {
        validators: Validators.required
      }),
      email: new FormControl('', {
        validators: Validators.required
      })
    }, { updateOn: 'submit'});*/
  }

}
