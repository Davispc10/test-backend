import rateLimit from 'express-rate-limit';

const rateLimiter = rateLimit({
  windowMs: 5 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

export default rateLimiter;
