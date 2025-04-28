import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() message: string = '';        
  @Input() type: string = '';           
  showToast: boolean = false;           

  ngOnInit(): void {
    
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000); 
  }

  ngOnDestroy(): void {
    this.showToast = false;
  }
}
