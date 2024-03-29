import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewletterService } from '../../services/newletter.service';


@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule
  ],
  providers: [
    NewletterService
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterform!: FormGroup;
  loading = signal(false)

  constructor(private service: NewletterService){
    this.newsletterform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(){
    this.loading.set(true);
    if(this.newsletterform.valid){
      this.service.sendData(this.newsletterform.value.name, this.newsletterform.value.email).subscribe({
        next: () => {
          this.newsletterform.reset();
          this.loading.set(false);
        }
      })
    }
  }
}
