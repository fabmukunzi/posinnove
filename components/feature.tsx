import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Chip,
} from "@nextui-org/react";
import { Users } from "lucide-react";
import { offersArray } from "@/utils/offers";
import { projectArray } from "@/utils/project";
import Image from "next/image";

const Features = () => {
  return (
    <div className="text-center py-3 px-0 max-sm:pl-0">
      <h1 className="text-primary font-bold text-2xl">
        Featured Projects
      </h1>
      <h1 className="mb-8">
        Take the follow projects according to your level and upskill your self
        through hands on project{" "}
      </h1>
      <div className="grid grid-cols-4 gap-3 my-4 items-center max-sm:flex max-sm:flex-col">
        {projectArray.map((project, i) => (
          <Card key={i} className="md:w-[290px] w-[350px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {project.title}
                  </h4>
                </div>
              </div>
              <Chip
                className={`${
                  project.level === "Beginner"
                    ? "bg-primary/20"
                    : project.level === "Intermediate"
                    ? "bg-[#fbff009c]"
                    : project.level === "Advanced"
                    ? "bg-[#74FC82]"
                    : ""
                } text-foreground border-default-200`}
                color="primary"
                radius="full"
              >
                {project.level}
              </Chip>
            </CardHeader>
            <CardFooter className="gap-4 flex justify-between">
              <div className="flex items-center gap-1">
                <Image className="w-8 h-8 rounded-full object-cover border border-primary" src={project.icon} alt={project.title} />
                <p className="font-semibold text-default-400 text-small">
                  Offered by
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-default-400 text-small">
                  <Users />
                </p>
                <p className="font-semibold text-default-400 text-small">25K</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Features;
