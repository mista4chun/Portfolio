import PageNav from "../components/PageNav";

function Resume() {
  return (
    <section className="bg-[#1e1e1e]">
      <PageNav type="horizontal" />

      <div className="mx-auto mt-10 grid max-w-6xl px-8 lg:grid-cols-2">
        <div className="pb-6">
          <h1 className="px-6 pb-4 text-2xl font-bold">✧ Education History </h1>
          <div className="grid grid-cols-[auto_1fr]">
            <article className="px-6">
              <div className="relative h-[600px] w-0.5 bg-gray-100">
                <div className="flex flex-col space-y-32">
                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>
                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>
                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>

                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>

                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>
                </div>
              </div>
            </article>
            <article className="mt-2 flex flex-col md:space-y-12 space-y-7">
              <div className="pb-2.5">
                <p className="font-semibold uppercase text-blue-400">
                  Modern HTML & CSS From The Beginning
                </p>
                <p>Udemy INC. and Traversy Media.</p>
                <p>2023</p>
              </div>
              <div className="pb-2 ">
                <p className="font-semibold uppercase text-blue-400">
                  Modern JavaScript From The Beginning 2.0
                </p>
                <p>Traversy Media</p>
                <p>2023</p>
              </div>
              <div className="pb-2">
                <p className="font-semibold uppercase text-blue-400">
                  The Ultimate Git Course
                </p>
                <p>CodeWithMosh</p>
                <p>2023</p>
              </div>
              <div className="pb-2">
                <p className="font-semibold uppercase text-blue-400">
                  The Ultimate React course, Next.js, Redux
                </p>
                <p>Udemy INCt</p>
                <p>2024</p>
              </div>
              <div>
                <p className="font-semibold uppercase text-blue-400">
                  Computer Science
                </p>
                <p>Abubakar Tafawa balewa University</p>
                <p>2021</p>
              </div>
            </article>
          </div>
        </div>
        <div>
          <h1 className="px-6 pb-4 text-2xl font-bold">
            ✧ Professional Experience
          </h1>
          <div className="grid grid-cols-[auto_1fr]">
            <article className="px-6">
              <div className="relative h-[600px] w-0.5 bg-gray-100">
                <div className="flex flex-col space-y-32">
                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>
                  <div>
                    <span className="absolute -ml-1.5 mt-9 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>
                  {/* <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>

                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>

                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div> */}
                </div>
              </div>
            </article>
            <article className="mt-2 flex flex-col space-y-12">
              <div className="pb-2.5">
                <p className="font-semibold uppercase text-blue-400">
                  nHub Foundation
                </p>
                <p>Web Developer & Instructor</p>
                <p>physical: Plateau State, Nigeria</p>
                <p>2024 - Present</p>
              </div>
              <div className="pb-2">
                <p className="font-semibold uppercase text-blue-400">
                  Good Communications
                </p>
                <p>physical: Plateau State, Nigeria</p>
                <p> Sales Rep</p>
                <p>2019</p>
              </div>
              {/* <div className="pb-2">
                <p className="text-blue-400">Udemy frontend School</p>
                <p>Learnt frontend developement</p>
                <p>2022</p>
              </div>
              <div className="pb-2">
                <p className="text-blue-400">Udemy frontend School</p>
                <p>Learnt frontend developement</p>
                <p>2022</p>
              </div>
              <div>
                <p className="text-blue-400">Udemy frontend School</p>
                <p>Learnt frontend developement</p>
                <p>2022</p>
              </div> */}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
