import { Component, Inject } from '@angular/core';

@Component({   
    selector: 'footer-app',
    templateUrl: 'app/Shared/footer.component.html'    
})
export class FooterComponent {   
    constructor (
        @Inject('window') window: Window
    ) {}
    
    gotoTopPage(): void {        
        window.scrollTo(0, 0);
    }    
}
