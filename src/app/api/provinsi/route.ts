import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from "path";

export async function GET(request: NextRequest) {
    const file = path.join(process.cwd(), 'src/app/api/provinsi', 'provinsi.json');
    const fileContents = await fs.readFile(file, 'utf-8');
    const objectData = JSON.parse(fileContents);
    return NextResponse.json(objectData, { status: 200 })
}