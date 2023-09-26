import Service from '@ember/service';

export default class ApiService extends Service {
    async fetchdata(){
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
            return await response.json();
        } 
        catch (error) {
            throw new Error("Error fething data: ${error.message}")
        }
    }
}
