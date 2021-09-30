# RN_QR_Step_test

# React Native 테스트 앱
- 리액트 네이티브 관련 QR코드 스캔과 걸음수 테스트용 앱

## 특징
- 리액트 네이티브를 공부하기 위하여 테스트로 진행 해본 프로젝트
- 리액트를 활용하여 안드로이드, iOS를 빌드 할수 있는 툴을 사용하기 위하여 진행
- Cordova, ionic 보다 더 네이티브적으로 작동할 수 있는 컴포넌트 기반의 자바스크립트 툴
- QR스캔은 카메라 Permission을 취득하여 사용, Stepcount는 안드로이드 Health앱, iOS HealthKit에서 데이터를 가져옴

## 개발 환경 및 사용 툴
- 에디터 : VSCODE
- 백엔드 : NodeJS
- 프론트엔드 : Javascript, React Native
- DB : -

## 작업기간
- 2021.09.20 ~ 2021.09.24 (5일)

## 구동 사진
![게스트_메인](https://user-images.githubusercontent.com/62881936/113835009-79efa780-97c6-11eb-960e-f69e17fec670.jpg)
![게스트_팝업](https://user-images.githubusercontent.com/62881936/113835012-7b20d480-97c6-11eb-8445-6d32148f79be.jpg)
![관리자_로그인](https://user-images.githubusercontent.com/62881936/113835014-7b20d480-97c6-11eb-9d23-aca890a7965d.jpg)
![관리자_메인](https://user-images.githubusercontent.com/62881936/113835016-7bb96b00-97c6-11eb-843e-8f3490dd4afa.jpg)
![관리자_팝업](https://user-images.githubusercontent.com/62881936/113835018-7bb96b00-97c6-11eb-96c8-a0a81258e645.jpg)

## 구현 설명
- 테스트 및 연습용 앱이기 때문에 간결한 CSS와 컴포넌트 기반의 구조를 파악하는데 주력하였다.
- 스크린은 두개로 구성되어있고, QR스캔 버튼을 누를 시 두번째 스크린으로 이동한다.
- expo를 사용하여 빌드 하였다.

## 느낀점
- React Native는 아무래도 진입장벽이 높다고 생각 되었다. 구조와 데이터의 흐름을 파악하기가 쉽지 않았다. 하지만 구글에서 여러 자료를 찾으며 직접 개발하고 테스트를 해보니 조금씩 가닥이 잡히기 시작했다. 아직 완전하게 다룰수 있지는 않지만 한가지 개발 언어로 안드로이드, iOS를 모두 빌드 할 수 있다는 점은 큰 장점이다. 그만큼 더 깊게 파악하고 공부하기에 큰 메리트가 있는 것 같다.
