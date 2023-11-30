import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-7xl font-extrabold text-transparent">
            VotingPortal
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-6xl pt-32">
            A blockchain-based E-voting system, built with love.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-4xl pt-6 pb-32 text-gray-500">
            Make your vote count
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-20 xl:gap-32">
            <div className="flex flex-col items-center gap-3">
              <p className="mx-auto mt-4 max-w-3xl text-md text-gray-500">
                Register/ Sign in for the Candidate
              </p>
              <Link
                to={"/register-admin"}
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Candidate
              </Link>
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="mx-auto mt-4 max-w-3xl text-md text-gray-500">
                Register/ Sign in for the Voters
              </p>
              <Link
                to={"/register-voter"}
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Voters
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2">
            <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
              <div className="block text-teal-600 lg:hidden"></div>

              <div className="mt-8 space-y-4 lg:mt-0">
                <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>

                <form className="mt-6 w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    {" "}
                    Email{" "}
                  </label>

                  {/* <div className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="john@rhcp.com"
                      className="w-full bg-transparent h-8 border-none  focus:border-transparent focus:ring-transparent sm:text-sm"
                    />

                    <button className="mt-1 w-full rounded bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                      Sign Up
                    </button>
                  </div> */}
                </form>
              </div>
            </div>

            <div className="py-8 lg:py-16 lg:pe-16">
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <p className="font-medium text-gray-900">Services</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        1on1 Coaching
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Company Review
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Accounts Review
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        HR Consulting
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        SEO Optimisation
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900">Company</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Meet the Team
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Accounts Review
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900">Helpful Links</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Contact
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Live Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-8">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Cookies
                    </a>
                  </li>
                </ul>

                <p className="mt-8 text-xs text-gray-500">
                  &copy; 2022. Company Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Home;
