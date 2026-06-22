import { NextResponse }
    from "next/server";

export function middleware(
    request
) {
    const response =
        NextResponse.next();

    response.headers.set(
        "X-Powered-By",
        "EBook Store"
    );

    return response;
}