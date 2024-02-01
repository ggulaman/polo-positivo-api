import { BadRequestException } from '@nestjs/common';

export const raise400 = (error: string) => { throw new BadRequestException(error) };