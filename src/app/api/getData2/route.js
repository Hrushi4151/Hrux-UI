import { NextResponse } from "next/server";


export async function POST(req,res){
  const body=await req.json();
  let idea=body.idea;
  const headers = {
    "Accept": "*/*",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "ACCESS-CONTROL-ALLOW-ORIGIN": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Origin": "https://tailwindgenie.com",
    "Referer": "https://tailwindgenie.com/?ref=taaft&utm_source=taaft&utm_medium=referral",
    "authority": "genius-ui.vercel.app",
    "method": "POST",
    "path": "/api/generateHtml",
    "scheme": "https",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9",
    "priority": "u=1, i",
    "sec-ch-ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cache-control": "public, max-age=0, must-revalidate",
    "content-encoding": "br",
    "content-type": "application/json; charset=utf-8",
    "etag": 'W/"mhg001jfmz3ct"',
    "server": "Vercel",
    "strict-transport-security": "max-age=63072000; includeSubDomains; preload",
    "x-matched-path": "/api/generateHtml",
    "x-vercel-cache": "MISS",
    "x-vercel-id": "bom1::iad1::6rzhm-1735037596833-243a0edd5d8c",
  };

  const bodydata = {
    content:
      'tailwind code only return html code no copy response for requested element in this format href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n<button class="bg-blue-500 text-white font-bold border border-black px-4 py-2 rounded">Buy Now</button>',
    id: null,
    threadId: "thread_FiztLmG0mDLizbOqZgXjPegA",
    message: idea,
  };
        const myres = await fetch("https://tailwindgenie.com/api/chat", {
          credentials: 'include',
                  mode: 'no-cors',
                  method: "POST",
                  headers: {
                    Accept: "*/*",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "ACCESS-CONTROL-ALLOW-ORIGIN": "*" ,
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Origin":"https://tailwindgenie.com",
                    "Referer":"https://tailwindgenie.com/?ref=taaft&utm_source=taaft&utm_medium=referral"
          },
          body:JSON.stringify(bodydata) ,
        });
        const textResponse = await myres.text();
const lines = textResponse.split('\n');

// Step 2: Filter lines starting with `0:`
const filteredLines = lines.filter(line => line.startsWith('0:'));

// Step 3: Extract the text after `0:` and clean up the quotes
const textArray = filteredLines.map(line => 
  line.replace(/^0:"/, "").replace(/"$/, "").replace('\\"','"').replace("\\n","\n") // Remove `0:` prefix and ending quote
);


const cleanedHTML = textArray.join("");
          
      return NextResponse.json({"status":200,data:cleanedHTML});

}
