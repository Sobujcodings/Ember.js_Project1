import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CardFilterComponent extends Component {
    // ata kora hoice dynamic input field r value gulake dekhar jonno onlick r maddhome click korle ai function trigger hobe
    @action
    handleInput(event) {
        this.inputValue = event.target.value;
        // this means inputValue='' here (inputValue property of the current instance of the component)
        console.log(this.inputValue);
        return this.inputValue;
    }

    @tracked inputValue = '';              // @value={{this.inputValue}}  padhaici then anchi 2tai korci ekhane
    // ai input ta input filed theke pabo coz ekhane this.inputValue dichi tai value=inputValue

    get filterCards() {
        const { cards } = this.args;
        // shei(search.hbs theke) argument pass korchi sheta niye nilam extract kore
        // console.log(cards.length, this.inputValue); this mane ekhane ai class ta nam (CardFilterComponent)
        if (this.inputValue) {
            let filterdcards = cards.filter((card) => card.attributes.title.includes(this.inputValue));
            // console.log(filterdcards);
            return filterdcards;
        }
        else {
            return cards;
        }
    }
    // input filed e type korle cards k filter korbo noyto jah ace shetakei return kore dekhiye dibo
    // return cards;
}
// *** input ta anlam card-filter.hbs r input theke R total cards gulo anlam searchbar.hbs compo theke argument pass kore
// ekahne jah likho sheta same nam e component diye receive korte hobe
// this.filtercard likhelei ai funciton r return value peye jabo


// The get filterCards(){} code snippet you provided is computed property definition in an Ember.js class component. In Ember.js, computed properties are used to derive values based on other properties, and they are defined using the get keyword.