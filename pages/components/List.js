import { useState, useEffect } from "react";
import { deleteResto, getResto } from "@/lib/pocketbase";
import Link from "next/link";
import Image from "next/image";

export default function listR() {
  const [resto, setResto] = useState([]);
  useEffect(() => {
    getResto().then((res) => setResto(res));
  }, []);
  return (
    <>
      {resto.map((r) => (
        <>
          {/* <Link to={`detail/${r.id}`}> */}
          <div className="container d-flex mt-3 border border-dark rounded position-relative" key={r.id}>
            <div className="d-flex border p-3 m-5 border-dark rounded">
              <div>
                <h4>{r.nama}</h4>
                <p className="text-gray">{r.alamat}</p>
              </div>
            </div>
            <div className="d-flex position-absolute mt-5 end-0 ">
              {/* <Link to={`/editR/${r.id}`}> */}
              <button className="btn btn-light border border-dark  m-1 d-flex align-items-center p-3 ">
                <span className="material-symbols-outlined">edit</span>
              </button>
              {/* </Link> */}
              <button className="btn btn-light border border-dark  m-1 d-flex align-items-center p-3 " onClick={() => deleteResto(r.id)}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
          {/* </Link> */}
        </>
      ))}
    </>
  );
}
