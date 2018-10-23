# Unicode 와 Encoding

## Ascii

- Unix 가 개발되던 시기 대표적으로 사용되기 시작한 문자열 세트
- 8 비트의 숫자로 [128 개의 문자열](www.robelle.com/library/smugbook/ascii.html)을 표기
- 예) `space - 32`, `A - 65`

## Unicode

- 문자열을 고유 숫자(`Code Point`)와 매칭하는 목록
- 숫자 앞에 붙는 `U+`는 Unicode 를 의미
- 예) `U+0048 U+0065 U+006C U+006C U+006F` => `Hello`

## Encoding

`Code Point`를 저장하고 해석하는 규칙 혹은 알고리즘

- UCS-2
  _ 초창기 Unicode 를 단순하게 저장했던 규칙
  _ 중요한 숫자를 앞에 배치할 지, 뒤에 배치할 지에 따라 BE(Big Endian), LE(Little Endian)으로 구분
  _ 예)
  _ BE`48 00 65 00 6C 00 6C 00 6F 00` \* LE`00 48 00 65 00 6C 00 6C 00 6F`
- UTF-8
  _ 8 바이트를 한 블럭 단위로 하는 인코딩
  _ 가장 앞선 `헤더`에 몇블럭을 한 문자열로 사용할 지 정보를 포함 \* 규칙
  | 첫번째 바이트 | 두번째 바이트 | 세번째 바이트 | 네번째 바이트 | 사용 가능한 비트 수 | 표현 가능한 최대 유니코드 |
  |———————|———————|———————|———————|——————————|—————————————|
  | 0xxxxxxx | | | | 7 | 007F hex (127) |
  | 110xxxxx | 10xxxxxx | | | (5+6)=11 | 07FF hex (2047) |
  | 1110xxxx | 10xxxxxx | 10xxxxxx | | (4+6+6)=16 | FFFF hex (65535) |
  | 11110xxx | 10xxxxxx | 10xxxxxx | 10xxxxxx | (3+6+6+6)=21 | 10FFFF hex (1,114,111) |

## Reference

- [Unicode Consortium](http://www.unicode.org)
- [UTF-8 Encoding](http://www.fileformat.info/info/unicode/utf8.htm)
- [The difference between UTF-8 and Unicode?](http://www.polylab.dk/utf8-vs-unicode.html)
- [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!) – Joel on Software](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
