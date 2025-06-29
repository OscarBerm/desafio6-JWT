import fs from 'fs';
import path from 'path';

export const loggerMiddleware = (req, res, next) => {
  const now = new Date().toISOString();
  const log = `[${now}] ${req.method} ${req.originalUrl}\n`;
  console.log(log);

  const logPath = path.resolve('logs', 'access.log');
  fs.appendFileSync(logPath, log, 'utf8');

  next();
};