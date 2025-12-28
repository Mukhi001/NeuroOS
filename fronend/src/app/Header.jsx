import Link from "next/link";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        background: "skyblue",
        fontSize: "24px",
        fontFamily: "arial",
        padding: "20px",
      }}
    >
      <Link href={"/courses"}>
        <div>Courses</div>
      </Link>
      <Link href={"/products"}>
        <div>Products</div>
      </Link>
      <Link href={"/help"}>
        <div>Sometihng</div>
      </Link>
    </div>
  );
}

export default Header;
