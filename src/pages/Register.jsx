import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="bg-slate-500 flex flex-col space-y-7 w-3/6 mx-auto px-3 py-16 items-center rounded-lg mt-20">
      <h1 className="font-semibold text-white">Register Now</h1>
      <form action="" className=" flex flex-col space-y-5">
        <input type="text" placeholder="name" className="px-2" />
        <input type="text" placeholder="email" className="px-2" />
        <input type="text" placeholder="password" className="px-2" />
        <button className="py-2 px-3 rounded-xl bg-slate-700 text-white">
          Submit
        </button>
      </form>
      <div>
        <Link to="/">Log In </Link>
      </div>
    </div>
  );
}
