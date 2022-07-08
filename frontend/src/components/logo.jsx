import { GiQuillInk } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Nav({ className }) {
  return (
    <Link
      to="/"
      aria-label="Company"
      title="Company"
      className={`inline-flex items-center ${className}`}
    >
      <GiQuillInk className="text-4xl" />
      <span
        className={`ml-2 text-xl font-bold tracking-wide  ${className}`}
      >
        a.Blog
      </span>
    </Link>
  );
}
