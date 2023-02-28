import { useParams, useSearchParams } from "react-router-dom";

const Detail = ({ Data }) => {
  const { id } = useParams();

  //자룔를 가져와서 자료에 매칭되는 data를 여기에 뿌리고 싶다
  return (
    <>
      <div>detail {Data[id].con}</div>
      <div>detail {id}</div>
    </>
  );
};

export default Detail;
