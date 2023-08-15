import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';

export async function GET(request: NextRequest, context: { params: { kota_id: string } }) {
    const fileContents = await fs.readFile('./public/kecamatan.json', 'utf-8');
    const objectData = JSON.parse(fileContents);
    const filteredData = objectData.filter((kecamatan: any) => kecamatan.kota_id == context.params.kota_id);
    return NextResponse.json(filteredData, { status: 200 });
}