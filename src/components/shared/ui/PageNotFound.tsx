import Image from "next/image";
import Link from "next/link";

function PageNotFound() {
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5 space-y-2">
        <h2 className={`font-semibold antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Whoops! Lo sentimos mucho.</p>
        <p className="font-light">
          <span>Puedes regresar a </span>
          <Link
            href="/"
            className="font-semibold hover:underline transition-all"
          >
            inicio
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbndkcWFnN3p6bmhpd29hOTdkNHZnMGo1eHBkOGNvN2dueW1sbTJkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2UCt7zbmsLoCXybx6t/giphy.gif"
          alt="Starman"
          className="p-5 sm:p-0 rounded-xl"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
}
export default PageNotFound;
