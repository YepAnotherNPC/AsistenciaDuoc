import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.startAnimation(); 
    setInterval(() => {
      this.startAnimation(); 
    }, 5000); // 5 segundos
  }

  startAnimation() {
    const title = document.getElementById('animated-title');

    if (title) {
      
      title.classList.remove('fade-out');
      void title.offsetWidth;
      title.classList.add('fade-out');
    }
  }
  cerrarSesion() {
    
    this.router.navigate(['/login']);
  }

  goToQRPage() {
    this.router.navigate(['qr']); // Asegúrase de que 'qr' sea la ruta correcta a la página QR
  }

  logout() {

    this.router.navigate(['login']);
  }
}
