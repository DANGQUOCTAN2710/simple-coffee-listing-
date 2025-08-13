import img from "./assets/img/bg-cafe-lg.jpg";
import Layout from "./Layout";
export default function MainPage() {
  return (
    <div>
      <img
        src={img}
        alt="bg-cafe-lg"
        className="object-cover max-h-96 w-full"
      />

      <Layout />
    </div>
  );
}
