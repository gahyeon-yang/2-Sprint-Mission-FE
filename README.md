### 프론트엔드 구현 요구사항

#### 랜딩 페이지

- [x] HTML과 CSS로 구현한 랜딩페이지를 React로 마이그레이션하세요.
- [x] 랜딩 페이지 url path는 "/"로 설정하세요.

#### 중고마켓 페이지

- [ ] 중고마켓 페이지 url path를 "/items"으로 설정하세요.
- [ ] 페이지 주소가 "/items" 일 때 상단내비게이션바의 "중고마켓" 버튼의 색상은 "3692FF"입니다.
- [ ] 중고마켓 페이지 판매 중인 상품은 본인이 만든 GET 메서드를 사용해 주세요.
- [ ] 다만 좋아요 순 정렬 기능은 제외해 주세요.
- [ ] 사진은 디폴트 이미지로 프론트엔드에서 처리해주세요.
- [ ] 베스트 상품 목록 조회는 구현하지 않습니다.
- [ ] '상품 등록하기' 버튼을 누르면 "/registration" 로 이동합니다. ( 빈 페이지 )

#### 상품 등록 페이지

- [ ] PC, Tablet, Mobile 디자인에 해당하는 상품 등록 페이지를 만들어 주세요.
- [ ] 상품 등록 url path는 "/registration"입니다.
- [ ] 상품 등록은 본인이 만든 POST 메서드를 사용해 주세요.
- [ ] 등록 성공 시, 해당 상품 상세 페이지로 이동합니다. (빈페이지)

### 프론트엔드 구현 심화 요구사항

#### 상품 등록 페이지

- [ ] 모든 입력 input box에 빈 값이 있을 경우, 등록 버튼이 비활성화됩니다.
- [ ] 태그를 입력한 후 엔터키를 누르면, 그 태그가 칩 형태로 쌓입니다.
- [ ] 상품명, 상품 소개, 판매 가격, 태그에 대한 유효성 검사 Custom Hook을 만들어주세요. 유효성 검사를 통과하지 않을 경우, 각 input에 빨간색 테두리와, 각각의 Input 아래에 빨간색 에러 메시지를 보여주세요.
      유효한 조건
      상품명: 1자 이상, 10자 이내
      상품 소개: 10자 이상, 100자 이내
      판매 가격: 1자 이상, 숫자
      태그: 5글자 이내
