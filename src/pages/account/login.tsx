import AccountLayout from "@/account/components/layout";
import Login from "@/account/components/login";
import Layout from "@/components/layout";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { updatePageLoading } from "@/store/slices/userSlice";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const {
    pageLoading,
    user: { _id },
  } = useSelector((state: RootState) => state.users);
  useEffect(() => {
    if (_id) {
      router.back();
    }
    if (pageLoading) {
      dispatch(updatePageLoading(false));
    }
  }, [dispatch, pageLoading, router, _id]);

  return (
    <Layout>
      <AccountLayout>
        <Head>
          <title>Login</title>
        </Head>
        <Login />
      </AccountLayout>
    </Layout>
  );
}
