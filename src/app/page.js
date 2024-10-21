"use client";

import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();

  router.replace("/home");

  // You can also conditionally redirect based on other factors
  // if (someCondition) {
  //   router.push('/home');
  // }

  return null;
}
