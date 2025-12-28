const url = "http://localhost:8000/posts";

export const sampleDate = async () => {
  const response = await fetch(url);
  return response.json();
};
async function page() {
  const data = await sampleDate();
  console.log(data, 898989888);

  return <div>Iam Products</div>;
}

export default page;
