import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Matheus Foganholo" },
    { id: 2, name: "John Doe" },
  ];

  return response.json(users);
};
