import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    { id: 1, path: "/", name: "Home" },
    { id: 1, path: "/login", name: "Login" },
    { id: 1, path: "/register", name: "Register" },
    { id: 1, path: "/orders", name: "orders" },
  ];

  return (
    <div className="flex flex-row justify-around">
      <div className="flex flex-row items-center gap-6">
        {links.map((link) => (
          <Link key={link.id} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <Link to="">Log Out</Link>
      </div>
    </div>
  );
}
