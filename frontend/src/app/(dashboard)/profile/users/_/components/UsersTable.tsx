"use client";
import Table from "@/ui/Table";
import { useGetAllUsers } from "../hooks/useGetAllUsers";
import UserRow from "./UserRow";

function UsersTable() {
  const { users } = useGetAllUsers();

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>آیدی</th>
        <th>ایمیل</th>
        <th>تعداد پست های لایک شده</th>
        <th>تعداد پست های بوکمارک شده</th>
      </Table.Header>
      <Table.body>
        {users?.map((user, index) => (
          <UserRow key={user._id} index={index} user={user} />
        ))}
      </Table.body>
    </Table>
  );
}

export default UsersTable;
