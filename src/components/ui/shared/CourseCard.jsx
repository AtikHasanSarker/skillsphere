import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
const CourseCard = ({ course }) => {
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={course.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={course.title}
          className="object-cover rounded-xl"
        />

        <Chip size="sm" className="absolute right-2 top-2">
          {course.level}
        </Chip>
      </div>

      <div>
        <h2 className="font-medium">{course.title}</h2>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p>
            <FaHeart />
          </p>
          <p>{course.rating}</p>
        </div>

        <Separator orientation="vertical" />

        <div>
          <p>{course.category}</p>
        </div>
      </div>

      <Link href={`/all-courses/${course.id}`}>
        <Button variant="outline" className={"w-full"}>
          Details
        </Button>
      </Link>
    </Card>
  );
};

export default CourseCard;
