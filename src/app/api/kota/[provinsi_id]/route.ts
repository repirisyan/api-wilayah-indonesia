import { NextResponse } from "next/server";
import { promises as fs } from 'fs';

export async function GET(request: Request, context: { params: { provinsi_id: string } }) {
    const fileContents = await fs.readFile('./public/kota.json', 'utf-8');
    const objectData = JSON.parse(fileContents);
    const filteredData = objectData.filter(kota => kota.provinsi_id == context.params.provinsi_id);
    return NextResponse.json(filteredData, { status: 200 });
}