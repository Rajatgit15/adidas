import axios from 'axios'

export class fetchUsers{
    private static URL:string = "https://jsonplaceholder.typicode.com"

    public static getUsers(){
        let Url:string = `${this.URL}/users`
        return axios.get(Url)
    }
}