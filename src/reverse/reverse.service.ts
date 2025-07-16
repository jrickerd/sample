import { Injectable } from '@nestjs/common';
import { ReverseResponseDto } from './reverse-response.dto';

@Injectable()
export class ReverseService {
  private compute(intToReverse: number): number {
    const sign: number = intToReverse < 0 ? -1 : 1;
    return (
      sign *
      (function reverseRecursive(
        intToReverse: number,
        reversed: number = 0,
      ): number {
        if (intToReverse === 0) {
          return reversed;
        }
        const rightDigit: number = intToReverse % 10;
        reversed = reversed * 10 + rightDigit;
        if (reversed > 2 ** 31 - 1) {
          return 0;
        }
        return reverseRecursive((intToReverse - rightDigit) / 10, reversed);
      })(intToReverse)
    );
  }

  /**
   * Reverse an integer without using string methods.
   *
   * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
   *
   * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
   *
   * -2**31 <= x <= 2**31 - 1
   *
   * @param intToReverse The integer to be reversed in the range -2**31 <= x <= 2**31 - 1
   * @returns The reversed integer.
   */
  reverse(intToReverse: number): ReverseResponseDto {
    return new ReverseResponseDto(this.compute(intToReverse));
  }
}
