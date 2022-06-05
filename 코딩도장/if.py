
x = int(input())          # 입력받은 값을 변수에 저장
 
if x == 10:               # x가 10이면
    print('10입니다.')    # '10입니다.'를 출력
 
if x == 20:               # x가 20이면
    print('20입니다.')    # '20입니다.'를 출력



price = int(input())
coupon = input()

if coupon == 'Cash3000':
    price-=3000
    if coupon == 'Cash5000':
        price-=5000
    print(price)