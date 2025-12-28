export default async function page({ params }) {
  const resolvedParams = await params;
  const { username } = resolvedParams;

  setTimeout(() => {
    console.log(resolvedParams);
  }, 100);

  return (
    <div>
      {username[0]} &nbsp;{username[1]}
    </div>
  );
}
