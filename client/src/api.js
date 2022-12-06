import axios from "axios";
const url = 'http://localhost:5000/api/post';

export default class API {
    // to get all the posts from the server
    static async getAllPosts(){
        const res = await axios.get(url,{ 
            headers: {
              token: localStorage.getItem("token") 
            }
          });
        return res.data;
    }
    // to get single post by id
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`,{ 
            headers: {
              token: localStorage.getItem("token") 
            }
          });
        return res.data;
    }

    static async getPostByDate(date){
        const res = await axios.get(`${url}/date/${date}`,{ 
            headers: {
                token : localStorage.getItem("token") 
            }
          });
        return res.data;
    }
    
    // to insert post into database
    static async addPost(post){
        console.log(post);
        const res = await axios.post(url, post,{ 
            headers: {
              token: localStorage.getItem("token") 
            }
          });
        return res.data;
    }
    // to update post into database
    static async updatePost(id, post){
        // console.log("ini id",id);
        console.log(post);
        const res = await axios.patch(`${url}/${id}`, post,{ 
            headers: {
              token: localStorage.getItem("token") 
            }
          });
        return res.data;
    }
    // to delete a post
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`,{ 
            headers: {
              token: localStorage.getItem("token") 
            }
          });
        return res.data;
    }
}