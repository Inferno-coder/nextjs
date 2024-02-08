import connectMongo from '../../../utils/connectMongo';
import postModel from '../../../utils/models/postModel';
const mongoose=require('mongoose');

export async function GET(){
try {
    await connectMongo()
    const posts=await postModel.find({})
    return Response.json(posts)
} catch (error) {
    return Response.json({msg:error.message})
}
}