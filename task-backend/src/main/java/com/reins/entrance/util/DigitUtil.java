package com.reins.entrance.util;

import java.math.BigDecimal;

public class DigitUtil {
    public static BigDecimal toBigDecimal(Object number) {
        if(number instanceof BigDecimal){
            return (BigDecimal) number;
        }else if (number instanceof Integer) {
                      return BigDecimal.valueOf(((Integer) number).intValue());
       } else if (number instanceof Double) {
                return BigDecimal.valueOf(((Double) number).doubleValue());
       } else {
               throw new IllegalArgumentException("Unsupported number type.");
        }
  }

  public static boolean isEqualBigDecimal(BigDecimal num1, BigDecimal num2) {
        BigDecimal epsilon = new BigDecimal("0.05");
        BigDecimal difference = num1.subtract(num2);
        BigDecimal absDifference = difference.abs();
        return absDifference.compareTo(epsilon) <= 0;
    }
}
