import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
const LoadDB = async () =>{
    await ConnectDB();
}
LoadDB();
export async function GET(request){
    await ConnectDB();
    const todos = await TodoModel.find({});
    return NextResponse.json({todos:todos})
}

export async function POST(request){
    await ConnectDB();
    const {title,description} = await request.json();
    await TodoModel.create({
        title,description
    })
    return NextResponse.json({msg:"todo created"})
}
export async function DELETE(request){
    await ConnectDB();
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await TodoModel.findByIdAndDelete(mongoId);
    return NextResponse.json({msg:"todo deleted"})
}

export async function PUT(request){
    await ConnectDB();
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await TodoModel.findByIdAndUpdate(mongoId,{
        $set:{
            isCompleted:true
        }
    });
    return NextResponse.json({msg:"todo updated"})
}
