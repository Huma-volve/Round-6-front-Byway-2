import BellImg from "../../assets/images/Vector.jpg";
import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";
import Vector3 from "../../assets/images/Vector3.png";
import Vector4 from "../../assets/images/Vector4.png";
export default function Bell() {
  return (
    <div className="relative h-50 w-50">
      <img src={BellImg} alt="bell" className="relative z-10" />
      <img src={Vector1} alt="Vector1" className="absolute top-0 left-2 z-20" />
      <img
        src={Vector2}
        alt="Vector2"
        className="absolute top-4 left-13 z-20 "
      />
      <div className="w-8 h-8 rounded-full bg-[#DBDBDB] absolute left-13 bottom-13 z-0"></div>
      <img
        src={Vector3}
        alt="Vector3"
        className="absolute left-13 bottom-13 z-19 "
      />
      <img src={Vector4} alt="Vector4" className="absolute bottom-7 left-4" />
    </div>
  );
}
