export const PostDate = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString('ru-RU');

  return <div className="post_date">{formattedDate}</div>;
};
