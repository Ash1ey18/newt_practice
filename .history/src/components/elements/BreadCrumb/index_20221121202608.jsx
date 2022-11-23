import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function BreadCrumb({ areaList, categoryList }) {
  const area = { ...areaList[0] };
  const areaName = area.name;
  const category = { ...categoryList[0] };
  const categoryName = category.name;
  console.log(areaName);
  console.log(categoryName);
  return (
    <div>
      <div>
        <span>トップ</span>
      </div>
    </div>
  );
}
