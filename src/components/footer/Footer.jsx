export default function Footer() {
  return (
    <footer className=" mt-12 py-10 md:py-10 bg-d-secondary text-d-text relative lg:mt-16 xl:mt-40">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-40">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 ">
            <a
              href="/error"
              className="mx-4 hover:text-d-accent">
              Visit Us
            </a>
            <a
              href="/error"
              className=" hover:text-d-accent mx-4">
              Contact Us
            </a>
            <a
              href="/error"
              className=" hover:text-d-accent mx-4">
              Kelompok 1
            </a>
          </div>
          <div className="mt-8 justify-center flex flex-col items-center md:mt-0 md:order-1 md:items-start">
            <a
              href="/"
              className=" font-bold text-3xl prompt">
              LIBELLUS
            </a>
            <p className="my-4 text-center">
              Created By
              <span className="text-d-accent"> Alden, Albert, Ervan, Jose, Michael</span>
            </p>
            <p className="text-base text-center">Copyright ©️ 2023 Libellus. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
