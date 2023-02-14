import axios from 'axios'

export class fetchPosts{
    private static URL:string = "https://jsonplaceholder.typicode.com"

    public static getPosts(){
        let Url:string = `${this.URL}/posts/5`
        return axios.get(Url)
    }
}