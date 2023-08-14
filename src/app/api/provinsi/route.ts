import { NextResponse } from "next/server";
import { promises as fs } from 'fs';

export async function GET() {
    const fileContents = await fs.readFile('./public/provinsi.json', 'utf-8');
    const objectData = JSON.parse(fileContents);
    return NextResponse.json(objectData, { status: 200 })
}