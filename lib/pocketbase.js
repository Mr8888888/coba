import PocketBase from "pocketbase";
const url = "https://hollow-computer.pockethost.io";
const resto = new PocketBase(url);
resto.autoCancellation(false);
export async function getResto() {
  return await resto.collection("restaurant").getFullList();
}
export async function createResto(nama, alamat, email, harga) {
  const data = { nama: nama, alamat: alamat, email: email, harga: harga };
  await resto.collection("restaurant").create(data);
}
export async function deleteResto(id) {
  let confirm = window.confirm("anda yakin ?");
  if (!confirm) {
    return;
  }
  await resto.collection("restaurant").delete(id);
  window.location.reload();
}
export async function editTask(id, nama, alamat, email, harga) {
  const data = { nama: nama, alamat: alamat, email: email, harga: harga };
  await resto.collection("restaurant").update(id, data);
}
