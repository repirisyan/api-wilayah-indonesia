import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from "path";

export async function GET(request: NextRequest) {
    const file = path.join(process.cwd(), 'public', 'kecamatan.json');
    const fileContents = await fs.readFile(file, 'utf-8');
    const objectData = JSON.parse(fileContents);
    const filteredData = objectData.filter((kecamatan: any) => kecamatan.kota_id == request.nextUrl.searchParams.get('kota_id'));
    return NextResponse.json(filteredData, { status: 200 });
}