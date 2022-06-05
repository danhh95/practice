''' for i in range(100):
    print('Hello Danhee!', i)
   
# range 객체를 리스트로 만듦
print(range(10))
print(list(range(10)))  

# for 변수 in range(시작, 끝):
for i in range(10, 21):
    print('Hello DANHEE!', i)  
# for 변수 in range(시작, 끝, 증가폭):
for i in range(20, 31, 5):
    print('Hello JO!', i)  
# for 변수 in range(시작, 끝, 감소폭):
for i in range(50, 15, -15):
    print('Hello Hyun!', i)  
    
# for 변수 in reversed(range(횟수))
for i in reversed(range(10)):
    print('Bye Yul~', i)
    
count = int(input('반복할 횟수를 입력하세요'))

for i in range(count):
    print('WELCOME TO MY HOUSE', i)
    

from itertools import count


a = [10,20,30,40,50]
for i in a:
    print(i)
    
fruits = ('🍒','🍍','🍉','🍎','🥑')
for fruit in fruits:
    print(fruit) 
    
    
# 시퀀스객체 for에 문자열 지정하며 하나씩 꺼내며 반복
for mobilePhone in 'iphone':
    print(mobilePhone, end=' ')
# reversed(시퀀스객체)
for mobilePhone in reversed('iphone'):
    print(mobilePhone, end=' ')
    

count = int(input())

for i in range(count):
    print('i의 값은', i)
    
x = [49, -17, 25, 102, 8, 62, 21]
for i in x:
    print(i*10, end=' ')
  '''

n = int(input())

for i in range(1,10):
    print(n,'*',i, '=', n*i)