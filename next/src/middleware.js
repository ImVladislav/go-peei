export { default } from "next-auth/middleware";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "@/i18nConfig";

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

// export default auth((req) => {
//   console.log("ROUTE:", req.nextUrl.pathname);
// });

export const config = {
  matcher: ["/auth/login", "/admin", "/((?!api|static|.*\\..*|_next).*)"],
};
