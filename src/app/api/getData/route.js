import { NextResponse } from "next/server";


export async function POST(req,res){
  const body=await req.json();
  let idea=body.idea;
  const headers = {
    "Accept": "*/*",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "ACCESS-CONTROL-ALLOW-ORIGIN": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Origin": "https://genius-ui.vercel.app",
    "Referer": "https://genius-ui.vercel.app/",
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
        const myres = await fetch("https://genius-ui.vercel.app/api/generateHtml", {
          credentials: 'include',
                  mode: 'no-cors',
                  method: "POST",
                  headers: headers,
          body: body,
          // body: body,
        });
        const response = await myres.json();
       
      return NextResponse.json({"status":200,response});

}
