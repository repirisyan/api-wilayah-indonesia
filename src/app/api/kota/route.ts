import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';

export async function GET(request: NextRequest) {
    const fileContents = await fs.readFile('./public/kota.json', 'utf-8');
    const objectData = JSON.parse(fileContents);
    const filteredData = objectData.filter((kota: any) => kota.provinsi_id == request.nextUrl.searchParams.get('provinsi_id'));
    return NextResponse.json(filteredData, { status: 200 });
}