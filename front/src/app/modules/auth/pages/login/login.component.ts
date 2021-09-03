import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public loading!: boolean;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    this.authService.checkSession(true).then(res => {
      this.router.navigate(['', 'books-journals'])
    }).catch(e => console.log(e))
  }

  onSubmit() {
    this.loading = true
    this.authService.login(this.form.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {
        const { data } = res;
        this.authService.setterSettings(data)
        this.router.navigate(['', 'books-journals'])
      })
  }
}
