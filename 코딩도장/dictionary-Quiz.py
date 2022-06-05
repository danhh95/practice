''' 표준 입력으로 문자열 여러 개와 숫자(실수) 여러 개가 두 줄로 입력됩니다. 
입력된 첫 번째 줄은 키, 두 번째 줄은 값으로 하여 딕셔너리를 생성한 뒤 딕셔너리를 출력하는 프로그램을 만드세요. 
input().split()의 결과를 변수 한 개에 저장하면 리스트로 저장됩니다.

health health_regen mana mana_regen
575.6 1.7 338.8 1.63

{'health': 575.6, 'health_regen': 1.7, 'mana': 338.8, 'mana_regen': 1.63} '''

''' 
x = {'health', 'health_regen', 'mana', 'mana_regen'}
y = {575.6,1.7,338.8,1.63} '''


x = input().split()  #split() 은 공백이 1개이건 2개이건 n개이건 상관없이 무조건 1개로 처리
                     #split("") 은 각각의 고액으로 따로따로 처리
y = map(float,input().split()) #map(변환 함수, 순회 가능한 데이터) / float 실수형
z = dict(zip(x,y))
print(z)