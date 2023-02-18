import React from "react";

export default function TodosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex mt-4">
      <div>Todo layout here...</div>
      <div>{children}</div>
    </div>
  );
}
