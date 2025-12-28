import Link from "next/link";

function layout({ children }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          background: "lightgreen",
          fontSize: "24px",
          fontFamily: "arial",
          padding: "20px",
        }}
      >
        <div>iam products</div>
        <Link href={"/products/foroofice"}>Office</Link>
        <Link href={"/products/forhome"}>Home</Link>
        <Link href={"/products/forotherpurpose"}>Others</Link>
      </div>
      <div>{children} </div>
    </div>
  );
}

export default layout;
