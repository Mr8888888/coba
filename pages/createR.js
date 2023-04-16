import React, { useState } from "react";
import { createResto } from "@/lib/pocketbase";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function CreateR() {
  const [nama, setNama] = useState(null);
  const [alamat, setAlamat] = useState(null);
  const [email, setEmail] = useState(null);
  const [harga, setHarga] = useState(null);
  const router = useRouter();
  const handleSubmit = () => {
    if (!nama) {
      window.alert("please enter a restaurant name");
      return;
    }
    createResto(nama, alamat, email, harga);
    router.push("/");
  };
  return (
    <>
      <h2 className="text-center">tambah Resto</h2>
      <div className="container  border border-dark border-2 rounded">
        <div>
          <div className="row p-2">
            <input className="text-input border border-dark border-1 rounded p-2" type="text" placeholder="nama" required onChange={(e) => setNama(e.target.value)} />
          </div>
          <div className="row p-2">
            <input className="text-input border border-dark border-1 rounded p-2" type="text" placeholder="alamat" onChange={(e) => setAlamat(e.target.value)} />
          </div>
          <div className="row p-2">
            <input className="text-input border border-dark border-1 rounded p-2" type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="row p-2">
            <input className="text-input border border-dark border-1 rounded p-2" type="text" placeholder="harga" onChange={(e) => setHarga(e.target.value)} />
          </div>
        </div>
        <button type="button" class="btn btn-light border border-dark  m-1 d-flex align-items-center p-3 " onClick={handleSubmit}>
          <span className="material-symbols-outlined">save</span>
        </button>
      </div>
    </>
  );
}
