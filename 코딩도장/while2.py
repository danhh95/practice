# 파이썬에서 난수를 생성하려면 random모듈이 필요함.   
import random  #random모듈을 가져옴

''' 
random.randint(a, b) : 범위를 지정해서 범위 안의 랜덤 숫자 뽑아내기
print(random.randint(1, 10))


 
i = 0
while i != 3: #3이 아닐 때 계속 반복
    i = random.randint(1, 6)
    print(i) 
-> 반복 횟수가 정해져 있지 않을 때 유용
    
# random.choice : 시퀀스 객체에서 요소를 무작위로 뽑아내기(리스트 or 튜플)
dice = [1,2,3,4,5,6,7,8,9,10,11,12,13]
print(random.choice(dice)) 
->반복횟수가 정해져있을 때 랜덤 숫자가 하나씩 출력됨
-> while문은 반복횟수가 정해져있지않을때 사용하고, 
반복횟수가 정해져있을때는 for문을 사용하는게 좋음



while True:  #while에 True를 지정하면 무한루프
    print('hehehe') 
    

while 1:  #0이 아닌 숫자는 True로 취급하여 무한 루프
    print('hehehe')  

while 'Hello':  #내용이 있는 문자열은 True로 취급하여 무한루프
    print('hehehe') 
    
i = 2
j = 5

while i<=32 or j>=1:
    print(i, j)
    i *= 2
    j -= 1 '''

## QUIZ
amount = int(input())
while amount>=1350:
    amount -= 1350 #감소시키기
    print(amount)
    
