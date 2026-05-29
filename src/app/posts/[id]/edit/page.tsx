"use client";

import { use } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id: idStr } = use(params);
  const id = Number(idStr);

  return <div>{id}번 글 수정페이지</div>;
}