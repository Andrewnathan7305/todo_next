import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
const LoadDB = async () =>{
    await ConnectDB();
}
LoadDB();
export async function GET(request){
    await ConnectDB();
    return NextResponse.json({msg:"get method hit"})
}

export async function POST(request){
    await ConnectDB();
    const {title,description} = await request.json();
    await TodoModel.create({
        title,description
    })
    return NextResponse.json({msg:"todo created"})
}
