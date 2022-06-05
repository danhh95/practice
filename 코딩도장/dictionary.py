#딕셔너리 만들기. 중복값이 있을경우 가장 뒤에 있는 값 출력
#중복키는 저장되지 x
lux = {'health' : 400, 'health':890, 'mana':330}
print(lux['health'])
#딕셔너리의 키에는 문자열, 정수, 실수, 불도 사용 가능
x = {100:'hundred', False:0, 3.5:[3.5, 3.5]}
print(x)
#dict로 딕셔너리 만들기
#zip 함수로 키 리스트와 값 리스트를 묶음
lux2 = dict(zip(['health', 'armor', 'mana'],[400,890,330]))
print(lux2)
#리스트 안에 (키,값) 형식의 튜플을 나열하는 방법
lux3 = dict([('health',400),('armor',890),('mana',330)])
print(lux3) 

lux = {'health':490, 'mana': 334, 'melee':550, 'armor':18.72}
print(lux['health'])

lux['health']=2037 #키 'health'의 값을 2037로 변경
print(lux['health'])

