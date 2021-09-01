import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { NotificacitionService } from '../../../../shared/services/notificacition.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  listRoles: Array<any> = [
    {
      name: 'Estudiante',
      value: 'student',
    },
    {

      name: 'Administrador',
      value: 'admin',
    },
    {

      name: 'Bibliotecario',
      value: 'librarian',
    },
  ]
  public form!: FormGroup;
  public loading!: boolean;
  public id!: string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private notificacition: NotificacitionService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ID: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id ? params.id : '';
      if (this.id) {
        this.getUser();
      }
    });
  }

  onSubmit() {
    this.loading = true
    if (this.id) {
      this.usersService.updateUser(this.id, this.form.value)
        .pipe(finalize(() => this.loading = false))
        .subscribe(res => {
          this.notificacition.showToast('Usuario Actualizado', 'Usuario actualizado satisfactioriamente')
          this.router.navigate(['/', 'users'])
        })
      return
    }
    this.usersService.registerUser(this.form.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        this.notificacition.showToast('Usuario Registrado', 'Usuario registrado satisfactioriamente')
        this.router.navigate(['/', 'users'])
      })
  }

  getUser() {
    this.usersService.getUser(this.id).subscribe((res) => {
      this.form.patchValue(res.data)
    })
  }
  cancel() {
    this.notificacition.confirm('Cancelar', 'Esta seguro que desea cancarlar esta operación', 'Ok')
      .then((res) => {
        this.router.navigate(['/', 'users'])
      }).catch((err) => {
        console.log(err);
      });
  }

}
