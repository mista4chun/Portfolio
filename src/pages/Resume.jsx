import PageNav from "../components/PageNav";

function Resume() {
  return (
    <section className="bg-[#1e1e1e] ">
      <PageNav type="horizontal" />

      <div className="mx-auto mt-10 max-w-6xl px-8 grid  lg:grid-cols-2">
        <div className="pb-6">
          <h1 className="font-bold pb-4 px-6 text-2xl">Education History</h1>
          <div className="grid grid-cols-[auto_1fr] ">
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
            <article className="mt-2 flex flex-col space-y-12">
              <div className="pb-2.5">
                <p className="text-blue-400">Udemy frontend School</p>
                <p>Learnt frontend developement</p>
                <p>2022</p>
              </div>
              <div className="pb-2">
                <p className="text-blue-400">Udemy frontend School</p>
                <p>Learnt frontend developement</p>
                <p>2022</p>
              </div>
              <div className="pb-2">
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
              </div>
            </article>
          </div>
        </div>
        <div>
          <h1 className="font-bold pb-4 px-6 text-2xl">Professional Experience</h1>
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
            <article className="mt-2 flex flex-col space-y-12">
              <div className="pb-2.5">
                <p className="text-blue-400">Udemy frontend School</p>
                <p>Learnt frontend developement</p>
                <p>2022</p>
              </div>
              <div className="pb-2">
                <p className="text-blue-400">Udemy frontend School</p>
                <p>Learnt frontend developement</p>
                <p>2022</p>
              </div>
              <div className="pb-2">
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
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
