import Route from '@ember/routing/route';
// import fetch from 'ember-fetch';

export default class IndexRoute extends Route {
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


// return {
//     title: 'Grand Old Mansion',
//     owner: 'Veruca Salt',
//     city: 'San Francisco',
//     location: {
//         lat: 37.7749,
//         lng: -122.4194,
//     },
//     category: 'Estate',
//     type: 'Standalone',
//     bedrooms: 15,
//     image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
//     description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
// };



// now we can recieve this model data from this route to dedicated template(hbs) file

//  index.js > index.hbs > imagedata

// image component will be used in application.hbs (main file)