import {Component} from '@angular/core';
import { CustomersComponent } from './customer/customers.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent]    
})
export class AppComponent {
    //[] means property binding; one way up from Component to DOM
    //() means event binding; DOM to Component

    //{{title}}, one way data binding from component to template
    title = 'Customer App';
    name = 'Momo';
    /*  binding to style property of the div, in this case color property of style
        bind to component to any property in DOM
    */
    momoColor = 'green';

    changeColor() {
        this.momoColor = this.momoColor === 'green' ? 'red' : 'green';
    }
}
