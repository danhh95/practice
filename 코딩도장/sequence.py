#특정값이 있는지 확인하기
a = [0,10,20,30,40,50]
print(30 in a)
print(100 in a)
#값이 없는지 확인
print(100 not in a)
#문자열에서도 확인 가능
'p' is 'hello Python'
print('p' in 'hello Python')
#두개의 리스트 연결, 변수를 만들지않아도 연결할 수 있음
a = [0,10,20,30]
b = [9,8,7,6]
print(a+b) #[0, 10, 20, 30, 9, 8, 7, 6]
#range는 + 연산자로 객체를 연결할 수 없음
a = list(range(0,6))+list(range(6,11))
print(a)
b = tuple(range(10,16))+tuple(range(16,21))
print(b)
#객체 반복하기 (실수, 음수는 에러남)
a = [0,1,2,3]*2
print(a)
#요소의 개수 구하기
a = [0,1,2,3,4,5]
print(len(a))
b = (0,1,2,3,4,5)
print(len(b))

print(len(range(0,5)))
#인덱스 요소 삭제하기
'''a = [38,21,18,59]
del a[3]
print(a)
 #튜플과 range  요소 삭제는 안됨. 에러발생
a = (38,21,18,59)
del a(2)
print(a)
a = range(0,10)
del a(2) 
print(a)'''
#슬라이스(객체의 일부를 잘라냄)
c = [0,10,20,30,40,50,60,70,80,90]
#print(c[:7:2])
#인덱스 증가폭을 지정하여 요소 할당하기
c[0:5:2] = ['a','b','c']
del c[2:4]
print(c)

x = ['1','2','3','4','5','6','7','8','9','10']
del x[-5:]
print(tuple(x))


x = ['oven', 'bat', 'pony', 'total', 'leak', 'wreck', 'curl', 'crop', 'space', 'navy', 'loss', 'knee']
del x[-5:]
print(tuple(x))

a = 'apple'
b = 'strawberry'
print(a[1::2]+b[0::2])