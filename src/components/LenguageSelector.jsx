import { useRouter } from "next/router";

export default function LenguageSelector() {
  const router = useRouter();

  const changeLenguaje = (e) => {
    // console.log(e.target.value)
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };
  return (
    <select
      onChange={changeLenguaje}
      className="select select-xs select-success w-24 lg:w-1/5"
    >
      <option disabled selected>
        Lenguage / Elige el idioma
      </option>
      <option value="en">Ingles / English</option>
      <option value="es">Español / Spanish</option>
    </select>
  );
}
