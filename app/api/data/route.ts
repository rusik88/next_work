import {NextResponse} from "next/server";

export async function GET(request: Request) {
    //return new Response("Here is data");
    return NextResponse.json({text: "Hello Welcome"});
}

export async function POST(request: Request) {
    return new Response("Here is POST data");
}