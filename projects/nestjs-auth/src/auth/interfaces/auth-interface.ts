import { Request } from 'express';
import { Role } from '../types/user.types';

export interface AuthenticatedUser {
  sub: string;
  role: Role;
}

export interface AuthenticatedRequest extends Request {
  user: AuthenticatedUser;
}
