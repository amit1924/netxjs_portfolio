import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";


export const getServerSideUser = async (req: NextApiRequest, res: NextApiResponse) => {
  return await getSession(req, res);
};


export const requireAuth = withPageAuthRequired;
