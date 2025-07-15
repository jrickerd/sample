import { Injectable } from '@nestjs/common';

@Injectable()
export class NumberService {
  getNumber(numberCandidate: string): number {
    return parseFloat(numberCandidate);
  }
  validateInteger(numberCandidate: number): boolean {
    return Number.isInteger(numberCandidate);
  }
}
