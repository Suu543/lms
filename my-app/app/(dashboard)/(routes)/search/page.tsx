import { redirect } from "next/navigation";
import { SearchInput } from "@/components/search-input";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { Categories } from "./_components/categories";
import { getCourses } from "@/actions/get-courses";
import { CoursesList } from "@/components/courses-list";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return (
    <>
      <div className="block px-6 pt-6 md:hidden md:mb-0">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories items={categories} />
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default SearchPage;
