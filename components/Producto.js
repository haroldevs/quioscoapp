import { formatearDinero } from "@/helpers";
import Image from "next/image";

const Producto = ({ producto }) => {
  const { imagen, nombre, precio } = producto;
  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen platillo ${nombre}`}
        width={400}
        height={500}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="font-black mt-5 text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>
      </div>
    </div>
  );
};

export default Producto;
