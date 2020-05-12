let state={
    profilePage:{
      postData:[
        { id: 1, message: "Hi,how are you?", likesCount: '15' },
        { id: 2, message: "It's my first post", likesCount: '20' },
      ]
       },
    dialogsPage:{
        dialogs:[
            {id:1,name:"Dimych"},
            {id:2,name:"Andrey"},
            {id:3,name:"Sveta"},
            {id:4,name:"Sasha"},
            {id:5,name:"Victor"},
            {id:6,name:"Valer"}  
          ], 
      messages:[
        {id:1,message:"Hi"},
        {id:2,message:"Hello"},
        {id:3,message:"What`s up"},
        {id:4,message:"Fine!And you?"},
        {id:5,message:"Ty good"},
        {id:6,message:"It`s very good"}
      ]
    },
    friends:{
      friendsList:[
     {id:1,name:"Dimych"},
     {id:5,name:"Victor"},
     {id:3,name:"Sveta"}
   ]
   }
    
    }
 
    


export default state;