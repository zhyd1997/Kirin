import { rest } from "msw";

import { baseUrl } from "@/baseUrl";
import type { SignInReqBody } from "@/types";

export const handlers = [
  rest.post(`${baseUrl}/api/v1/auth/register`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ success: true, token: "test" }))
  ),

  rest.post<SignInReqBody, any>(
    `${baseUrl}/api/v1/auth/login`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          success: true,
          token: "test",
          username: "test",
        })
      )
  ),

  rest.get(`${baseUrl}/api/v1/auth/logout`, (req, res, ctx) =>
    res(ctx.status(200))
  ),
];
