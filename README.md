import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.SECRET });

  const { pathname } = req.nextUrl;

  // Role-based access control (RBAC) routes
  const roleRoutes = {
    admin: ["/admin", "/admin/settings"],
    broker: ["/broker", "/broker/dashboard"],
    investor: ["/investor", "/investor/portfolio"],
    user: ["/dashboard", "/profile"],
  };

  // Find which role is required for the requested route
  const requiredRole = Object.keys(roleRoutes).find((role) =>
    roleRoutes[role].some((route) => pathname.startsWith(route))
  );

  // If a protected route requires a role but the user is missing or has a different role
  if (requiredRole && (!token || token.role !== requiredRole)) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect unauthorized users
  }

  return NextResponse.next(); // Allow access if the role matches
}

export const config = {
  matcher: ["/admin/:path*", "/broker/:path*", "/investor/:path*", "/dashboard/:path*"],
};
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
