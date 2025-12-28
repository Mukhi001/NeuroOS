import React from "react";
// import Header from "./Header";
import Link from "next/link";

function layout({ children }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          background: "yellow",
          fontSize: "24px",
          fontFamily: "arial",
          padding: "20px",
        }}
      >
        <div>iam course</div>
        <Link href={"/courses/bipc"}>BiPC</Link>
        <Link href={"/courses/mpc"}>MPC</Link>
        <Link href={"/courses/ca"}>CA</Link>
      </div>
      <div>{children} </div>
    </div>
  );
}

export default layout;
