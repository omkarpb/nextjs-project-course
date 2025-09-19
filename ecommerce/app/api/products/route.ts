import { products } from "@/app/prdocuts-data";

export async function GET() {
    return new Response(JSON.stringify(products), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}