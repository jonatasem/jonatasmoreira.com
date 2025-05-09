import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Mobile({ mobClick, isOpen }) {
  return (
    <section className="container-mobile">
      <p onClick={mobClick}>{isOpen ? <FaXmark /> : <FaBars />}</p>
    </section>
  );
}
