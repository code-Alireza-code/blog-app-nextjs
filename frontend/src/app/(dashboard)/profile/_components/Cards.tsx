import { fetchCardData } from "@/services/dashboardData";
import Card from "./Card";

async function Cards() {
  const { numberOfComments, numberOfPosts, numberOfUsers } =
    await fetchCardData();

  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card title="کاربران" type="users" value={numberOfUsers} />
      <Card title="پست ها" type="posts" value={numberOfPosts} />
      <Card title="کامنت ها" type="comments" value={numberOfComments} />
    </div>
  );
}

export default Cards;
