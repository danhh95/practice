#else는 if 조건문 뒤에 오며 단독으로 사용할 수 없음
''' if 조건식 : 
    코드1
else :
    코드 2
'''      '''
x = 5
if x == 10:
    print('10입니다.')
else:
    print('x에 들어있는 숫자는')
    print('10이 아닙니다.')
     
     
if True:
    print('참')
else:
    print('거짓')
    
if False:
    print('참')
else:
    print('거짓')
    
if None:      #None은 false로 정의 된다
    print('참')
else:
    print('거짓')
    
if 0:      #0은 거짓이다
    print('참')
else:
    print('거짓')
    
if 5.1:      
    print('참')
else:
    print('거짓')
    

x = 10
y = 20

if x == 10 and y == 20:
    print('참')
else:
    print('거짓') '''
    
    
from posixpath import split
from traceback import print_tb

# Quiz
korean, english, math, science = map(int,input().split())   
x = (korean+english+math+science)/4


if korean>100 or english>100 or math>100 or science>100:
    print('잘못된 점수')
    
else:
    if x >= 80 :
        print('합격')
    else :
        print('불합격')