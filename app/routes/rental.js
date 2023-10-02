import Route from '@ember/routing/route';

// title link e click korle ai route e ashbe ai route e (data o padhiye diyechi ai route r jonno) sekhan theke id 
// niye sheta diye fetch korbo shei json obj k

// ai fetch r link milte hobe route,js r path r sathe tahole alada url/route toyri hobe r rental.js r data rental.hbs
// tempalte e dekahte parbo


export default class RentalRoute extends Route {
    async model(params){
        // console.log(params.id);
        let response = await fetch(`api/rentals/${params.id}.json`);
        let parsed = await response.json();                    // uporer fetch kora response(data) k json e conver kore nilam
        // console.log(parsed.data);
        return parsed.data;                              // parsed.data korlei oi data pabo
    }
}
// porer rental.hbs e abar @model diye ata return r data pabo
//localhost:4200/api/rentals/grand-old-mansion.json
// fetch(`api/rental/${params.id}`);
// ekhan theke route.js file e jeye jei route match pabe shei route dekhabe


// ai rettun/ @model ta k ami ai route r jonno nirdisto je rental route r template sekhane use korte parbo only