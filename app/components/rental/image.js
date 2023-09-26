import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
    // constructor(...args) {
    //     super(...args);
    //     this.isLarge = false;
    // }

    @tracked isLarge = false;

    @action toggleSize() {
        this.isLarge = !this.isLarge;
    }
}


// ** First, we added the @tracked decorator to the isLarge instance variable. This annotation tells Ember to monitor this variable for updates. Whenever this variable's value changes, Ember will automatically re-render any templates that depend on its value.

// In our case, whenever we assign a new value to this.isLarge, the @tracked annotation will cause Ember to re-evaluate the {{#if this.isLarge}} conditional in our template, and will switch between the two blocks accordingly.