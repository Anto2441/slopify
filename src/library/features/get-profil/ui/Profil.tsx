import { GetProfilFeature } from "../model/GetProfilFeature";

export async function Profil() {
  const getProfilFeature = new GetProfilFeature();

  const { data, error } = await getProfilFeature.execute();
  console.log("dataUser", data);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <h1>User</h1>
      <p>name : {data.display_name}</p>
      <p>nickName : {data.id}</p>
      <br />
    </>
  );
}
