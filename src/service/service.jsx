import axios from 'axios';

export function newregistration(UserInformation)
{
    return axios.post("http://localhost:8080/home/newRegistration",UserInformation,
    {
        headers:{
            "Content-Type":"application/json;charset=utf-8"
        }
    });
} 
export function  Logininfo(LoginDTO)
{
    return axios.post("http://localhost:8080/home/login",LoginDTO,
    {
        headers:{
            "Content-Type":"application/json;charset=utf-8"
        }
    });
    
}  

export function  resetpassword(ResetPasswordDto)
{
    return axios.post("http://localhost:8080/home/reset",ResetPasswordDto,
    {
        headers:{
            "Content-Type":"application/json;charset=utf-8"
        }
    });
    
}
export function forgetpassword(ForgetPasswordDTO)
{
    console.log("username is" ,ForgetPasswordDTO)
    return axios.post("http://localhost:8080/home/forget",ForgetPasswordDTO,
    {
        headers:{
            "Content-Type":"application/json;charset=utf-8"
        }
    });
    
}
export function createNote(Notes) 
{
    console.log("comming from dashboard",Notes)
    
    return axios.post("http://localhost:8080/note/create",Notes,
    {
        headers:{
            "Content-Type":"application/json;charset=utf-8"
            ,"token":sessionStorage.getItem('token')
            // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphZGhhdnByYW5pdGE0QGdtYWlsLmNvbSJ9.tU8iRCnNXybeszbyKDMq-9DIwInZ7Z0QsIbY37yPXA0"

        }
    });
}  
export function findnotes() 
{
    console.log("comming from dashboard")
    
    return axios.get("http://localhost:8080/note/getnote",
    { 
        headers:{
            "Content-Type":"application/json;charset=utf-8"
            ,"token":sessionStorage.getItem('token')


        }
    });
}  
export function trash(Notes) 
{
    console.log("comming from dashboard")
    
    return axios.post("http://localhost:8080/note/trash",Notes,
    { 
        headers:{
            "Content-Type":"application/json;charset=utf-8"
            ,"token":sessionStorage.getItem('token')
            // "noteId":sessionStorage.getItem('noteId')

        }
    });
}  

export function archieve(Notes) 
{
    console.log("comming from dashboard")
    
    return axios.post("http://localhost:8080/note/archieve",Notes,
    { 
        headers:{
            "Content-Type":"application/json;charset=utf-8"
            ,"token":sessionStorage.getItem('token')
            // "noteId":sessionStorage.getItem('noteId')

        }
    });
}  
export function CreateLabel(Label ) 
{
    console.log("comming from dashboard",Label)
    
    return axios.post("http://localhost:8080/label/create",Label,
    {
        headers:{
            "Content-Type":"application/json;charset=utf-8"
            ,"token":sessionStorage.getItem('token')
            // sessionStorage.getItem('token')

        }
    });
}  
export function getLabels() 
{
    console.log("comming from dashboard")
    
    return axios.get("http://localhost:8080/label/getinfolabel",
    { 
        headers:{
            "Content-Type":"application/json;charset=utf-8"
            ,"token":sessionStorage.getItem('token')

        }
    });
}  
export function trashfile() 
{
    console.log("comming from dashboard")
    
    return axios.get("http://localhost:8080/note/trashlist",
    { 
        headers:{
            "Content-Type":"application/json;charset=utf-8"
            ,"token":sessionStorage.getItem('token')

        }
    });
}  
export function add() 
{
    console.log("comming from dashboard")
    
    return axios.get("http://localhost:8080/label/addLabelToNote",
    { 
        headers:{
            "Content-Type":"application/json;charset=utf-8"
            ,"token":sessionStorage.getItem('token')

        }
    });
}  
