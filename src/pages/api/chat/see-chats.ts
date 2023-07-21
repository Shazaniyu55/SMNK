
import Chat from "@/lib/model/chat"
import dbConnect from "@/lib/mongoose"


export default async function handler(req:any,res:any){
    //get database connection
    await dbConnect()
    const {receiverId} = req.body
        if(receiverId){
            try{
                const chats = await Chat.find({'chats.youId':receiverId},{chats:true,})
               if(chats){
                chats.map(async(chat:any)=>{
                    chat.chats.map((chat:any)=>{
                        const filterredChats = chat.me.filter((me:any)=>me.seen === false)
                        filterredChats.map((me:any)=>{
                            me.seen = true
                            
                           })
                    })
                   
                   await chat.save()
                })
               
              
               }
                     res.status(201).json('')
             }catch(err){
                 console.log(err)
                 res.status(400).json({message:"Sorry an error occurred,please try again"})
             }
        }else{
            res.status(400).json({message:"Invalid request"})
        }
}