// pages/api/auth.js

import { auth } from "../../../auth"; // Adjust the import according to your project structure

export default async function handler(req, res) {
  const session = await auth();
  if (!session) {
    return res.status(401).json({ loggedIn: false, user: null });
  }
  res.status(200).json({ loggedIn: true, user: session.user });
}
