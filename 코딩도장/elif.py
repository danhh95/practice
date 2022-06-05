''' x = 20

if x == 10 :
    print('10입니다.')
elif x == 20 :
    print('20입니다.')
else :
    print('30입니다.')
    
button = int(input())

if button == 1:
    print('콜라')
elif button == 2:
    print('사이다')
elif button == 3:
    print('환타')
else:
    print('제공하지않는 메뉴')
    
    
x= int(input())
if 11<=x<=20:
    print('11~20')
elif 21<=x<=30:
    print('21~30')
else :
    print('아무것도 해당하지 않음')
     '''
     
#Quiz     
age = int(input())
balance = 9000

if 7<=age<=12:
    balance-=650
elif 13<=age<=18:
    balance-=1050
else:
    balance-=1250

print(balance)