import connectMongo from '../../../utils/connectMongo';
import postModel from '../../../utils/models/postModel';
const mongoose=require('mongoose');

export async function GET(req,{params}){
    const query=req.nextUrl.searchParams.get('q')
try {
    await connectMongo()
    let posts;
    if(query){
        posts=await postModel.find({
            $or:[
            {title: new RegExp(query,'i')},
            {desc: new RegExp(query,'i')},
            ]   
        });
    }
    else posts=await postModel.find({})
    return Response.json(posts)
} catch (error) {
    return Response.json({msg:error.message})
}
}