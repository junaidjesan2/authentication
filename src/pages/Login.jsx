import { Link } from "react-router-dom";

export default function Login() {
  const signUpFunction=(e)=>{
    console.log(e)
  }
  return (
    <div className="min-h-screen lg:mt-28">
      <div className="flex flex-col justify-center items-center space-y-5 bg-stone-400 py-28 rounded-xl">
        <h1 className="text-3xl font-semibold">Sign IN</h1>
        <form action="" className="flex flex-col space-y-5 w-3/6">
          <div className="flex flex-col-reverse">
            <input
              className="py-2 px-2 rounded-lg"
              type="text"
              id="email"
              placeholder="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="flex flex-col-reverse">
            <input
              className="py-2 px-2 rounded-lg"
              type="text"
              id="password"
              placeholder="Password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <button
            onSubmit={() => signUpFunction()}
            className="py-2 rounded-lg bg-neutral-600"
          >
            Sign In
          </button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}
