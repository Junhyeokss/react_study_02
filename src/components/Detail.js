import { useParams } from "react-router-dom";

const Detail = ({ itm }) => {
  const { id } = useParams();
  const detailItm = itm.find((it) => it.id == id);
  console.log(detailItm);
  //자룔를 가져와서 자료에 매칭되는 data를 여기에 뿌리고 싶다
  // javascript에서 브라우즈 주소창 parameter 값과 일치하는 배열에 있는 값을 구하는 방법
  return (
    <>
      <div>detail{id}</div>
      <div>
        <img src={detailItm.image_link} />
      </div>
    </>
  );
};

export default Detail;
