import axios from 'axios';

export function newregistration(UserInformation)
{
    console.log("service class",UserInformation)
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
    console.log(Notes,"comming from dashboard")
    
    return axios.post("http://localhost:8080/note/trash",Notes,
    { 
        headers:{
            "Content-Type":"application/json;charset=utf-8"
            ,"token":sessionStorage.getItem('token')
            // "noteId":sessionStorage.getItem('noteId')

        }
    });
}
export function untrash(noteid){
    return axios.post("http://localhost:8080/note/untrash",noteid,{
    params:{
        "noteId":noteid
    },
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token')
        }
    });
}  
export function deletes(noteid)
{
    console.log("inside the trashdelete")
    return axios.post("http://localhost:8080/note/deletetrash",noteid,{
    params:{
        "noteId":noteid
    },
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token')
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
export function unarchieve(noteId){
    return axios.post("http://localhost:8080/note/unarchieve",noteId,{
    params:{
        "noteId":noteId
    },
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token')
        }
    });
}
export function archievefile()
{ 
    console.log("comming from dashboard archievefile")
    return axios.get("http://localhost:8080/note/archievelist",
    {
    headers:{
        "Content-Type":"application/json;charset=utf-8"
        ,"token":sessionStorage.getItem('token')

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
    console.log("comming from  in trash dashboard")
    
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
export function addreminders(times,noteId){
    return axios.post("http://localhost:8080/note/reminder",{times,noteId},{
        headers:{
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token'),
        },params:{
            "noteId":noteId,
            "times":times
        }
    })
}
export function reminderlist() 
{
    console.log("comming from dashboard")
    
    return axios.get("http://localhost:8080/note/reminderlist",
    { 
        headers:{
            "Content-Type":"application/json;charset=utf-8"
            ,"token":sessionStorage.getItem('token')


        }
    });
}  
export function remove(noteId)
{
    return axios.post("http://localhost:8080/note/removereminder",noteId,{
        params:{
            "noteId":noteId
        },
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });
}
export function  ispin(noteId){

    console.log("inside the pinnote",noteId)
    return axios.post("http://localhost:8080/note/pin",noteId,{
    params:{
        noteId:noteId
    },
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token')
        }
    });
}
export function  colaborate(emailid,noteId){

    console.log("inside the collaboratore",noteId,emailid)
    return axios.post("http://localhost:8080/note/collaborate",{emailid,noteId},{
    params:{
        "emailid":emailid,
        "noteId":noteId
    },
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token')
        }
    });
}
export function  addLabeltonote(noteId,labelid){
    return axios.post("http://localhost:8080/label/addLabelToNote",{noteId,labelid},{
        headers:{
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token'),
        },params:{
            "noteId":noteId,
            "labelid":labelid
        }
    })
}
export function  getList(noteId){
    console.log('tytyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',noteId)
    return axios.get("http://localhost:8080/note/getCollabList",{
        params:{
            "noteId":noteId,
            "token": sessionStorage.getItem('token')
            
        },
                headers:{
            "Content-Type": "application/json;charset=utf-8",
        },
    })
}
export function  LabelAddedToNote(noteId){
    console.log("juuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",noteId)
    return axios.get("http://localhost:8080/label/displaylabeladdedtonote",{
        params:{
            "noteId":noteId,
            "token": sessionStorage.getItem('token')
            
        },
                headers:{
            "Content-Type": "application/json;charset=utf-8",
        },
    })
}
export function   displayLabelUnAdded(noteId){
    console.log("juuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",noteId)
    return axios.get("http://localhost:8080/label/DisplayUnAddedlabel",{
        params:{
            "noteId":noteId,
            "token": sessionStorage.getItem('token'),

        },
                headers:{
            "Content-Type": "application/json;charset=utf-8",
        },
    })
}
export function removeToLabelFromNote( labelid, noteId ) {
    return axios.post('http://localhost:8080/label/removeLabelFromNotes', { noteId, labelid }, { params: 
    { "token": sessionStorage.getItem('token'),
     'noteId': noteId, 'labelid': labelid } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}
export function displayNoteListBySearchKey(typeText) {
    return axios.get('http://localhost:8080/note/noteListBySearchText', { params: { "token": sessionStorage.getItem('token'), 'typeText': typeText } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}
export function updatelabel(Label) {
    console.log(Label.labelid,"labelid is")
    console.log(Label.labelname,"labelname is")
    return axios.post('http://localhost:8080/label/update',Label, {
        params: {
             "token": sessionStorage.getItem('token')
        }
    }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}

export function deletelabel(Label) {
    console.log(Label.labelid,"labelid is")
    return axios.post('http://localhost:8080/label/delete',Label, {
        params: {
             "token": sessionStorage.getItem('token')
        }
    }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}
export function setBackgroundColor( Notes ) {
    console.log(Notes,"kkkkkkkkkkkkkkkkkkkkkkkk")
    return axios.post('http://localhost:8080/note/BackgroundColorUpdate', Notes, { params: 
    { "token": sessionStorage.getItem('token') } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}