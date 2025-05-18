import { fetchCardData } from "@/services/dashboardData";
import Card from "./_components/Card";

async function ProfilePage() {
  const { numberOfComments, numberOfPosts, numberOfUsers } =
    await fetchCardData();

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card title="کاربران" type="users" value={numberOfUsers} />
        <Card title="پست ها" type="posts" value={numberOfPosts} />
        <Card title="کامنت ها" type="comments" value={numberOfComments} />
      </div>
    </div>
  );
}

export default ProfilePage;
