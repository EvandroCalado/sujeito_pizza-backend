import { type NextFunction, type Request, type Response } from 'express';
import { verify } from 'jsonwebtoken';

interface Payload {
  sub: string;
}

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: 'User unauthorized' });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, process.env.JWT_SECRET!) as Payload;

    req.user_id = sub;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'User unauthorized' });
  }
}
