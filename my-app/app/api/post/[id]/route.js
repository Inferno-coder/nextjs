import connectMongo from '../../../../utils/connectMongo';
import postModel from '../../../../utils/models/postModel';
const mongoose=require('mongoose');

export async function GET(req,{params}){
try {
    await connectMongo()
    const posts=await postModel.findOne({_id:params.id})
    return Response.json(posts)
} catch (error) {
    return Response.json({msg:error.message})
}
}