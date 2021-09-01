import { Injectable } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class NotificacitionService {

  constructor(
    private toaster: Toaster,
  ) { }


  showToast(title = '', message = '') {
    try {
      this.toaster.open({
        text: message,
        caption: title
      });
    } catch (e) {
      return 422;
    }
  }

  handleError = (message = '') => {
    try {
      this.toaster.open({
        text: message,
        caption: 'Error',
      });
    } catch (e) {
      return 422;
    }
  }
  confirm = (title = '', text = '', ok = '') => {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title,
        text,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        customClass: {
          container: 'container-class'
        },
        confirmButtonText: ok
      }).then((result) => {
        if (result.value) {
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
  };

}
