import "./sections.css";
import livingRoomImg from "../../../shared/assets/living.jpg";
import bedroomImg from "../../../shared/assets/bedroom.jpg";
import officeImg from "../../../shared/assets/office.jpg";
import diningImg from "../../../shared/assets/dining.jpg";
const rooms = [
  {
    name: "Living Room",
    img:livingRoomImg ,
    color: "#b9b2e8",
  },
  {
    name: "Bedroom",
    img: bedroomImg ,
    color: "#d9cf47",
  },
  {
    name: "Home Office",
    img:  officeImg,
    color: "#9acbbd",
  },
  {
    name: "Dining Room",
    img: diningImg,
    color: "#d65332",
  },
];
export default function ShopByRoom() {
  return (
    <section className="rooms-section cream-section" id="rooms">
      <div className="section-inner">
        <h2 className="section-title">Shop by Room</h2>
        <div className="room-grid">
          {rooms.map((room) => (
            <a
              href="#bestsellers"
              className="room-card"
              style={{ "--card-accent": room.color }}
              key={room.name}
            >
              <img src={room.img} alt={room.name} />
              <span>{room.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
