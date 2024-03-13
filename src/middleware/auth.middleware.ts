import { Request, Response, NextFunction } from 'express';
import { TOKEN } from 'src/constants/constants';

export function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authorizationHeader = req.header('Authorization');

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    res.send({
      error: {
        code: 401,
        message: 'Unauthorized',
      },
    });
  }

  const token = authorizationHeader.split('Bearer ')[1];

  if (token && token === TOKEN) {
    next();
  } else {
    res.send({
      error: {
        code: 401,
        message: 'Unauthorized',
      },
    });
  }
}
