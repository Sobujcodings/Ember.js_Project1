import Route from '@ember/routing/route';

export default class AboutRoute extends Route {
    async model() {
        // lets fecth data from public/api/renta.json file
        let response = await fetch('/api/rentals.json');
        let parsed = await response.json();
        console.log(parsed.data);  // (3) [{…}, {…}, {…}]  3ta data peye gechi akhn 3ta tai 3bar loop hobe each korle 
        return parsed.data;
        // kintu index.hbs file receive korbo model namei
        // console.log(parsed);
    }

}
