
/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

// addEventListener의 이벤트로 클릭 포커스 블러 등이 있다.
// setAttribute 속성값을 정해줄수있다.

// window 우리가 보고있는 화면 자체다


/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear()