import SWDetailsNoCollapse from "@/components/card/SWDetailsNoCollapse";
import Layout from "@/components/dashboard/layout";
import { RootState } from "@/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const { _id } = useSelector((state: RootState) => state.users.user);
  const router = useRouter();
  useEffect(() => {
    if (!_id) {
      router.push("/");
    }
  });
  return (
    <>
      <Layout>
        <SWDetailsNoCollapse userId={_id} />
      </Layout>
    </>
  );
}
