//기본
fetch('./index.json')
  .then((res) => {
    console.log('해결', res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log('에러', e);
  });
//======================================================
// 연속적인 사용
fetch('./index.json')
  .then((res) => {
    console.log('해결1', res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch('./index.json');
  })
  .then((res) => {
    console.log('해결2', res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch('./index.json');
  })
  .catch((e) => {
    console.log('에러', e);
  });
//======================================================
//비동기 함수에서 오류 처리하는 방법과
//위에 코드 리팩터링
// fetch get요청 자동실행
const loadStarWarsPeople = async () => {
  try {
    const res1 = await fetch('./index.json');
    const data1 = await res1.json();
    console.log(data1);
    const res2 = await fetch('./index.json');
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log('에러!!!!@@@@', e);
  }
};
loadStarWarsPeople();
//======================================================

//axios 사용법
const getStarWarsPerson = async (id) => {
  const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
  console.log(res.data);
};
getStarWarsPerson(5);
getStarWarsPerson(10);
