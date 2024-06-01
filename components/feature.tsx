import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Users } from "lucide-react";
import { offersArray } from "@/utils/offers";
import { projectArray } from "@/utils/project";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="text-center py-3 px-0 max-sm:pl-0">
      <h1 className="text-primary font-bold text-2xl">
        Featured for Projects{" "}
      </h1>
      <h1 className="my-2">
        Take the follow projects according to your level and upskill your self
        through hands on project{" "}
      </h1>
      <div className="grid grid-cols-4 gap-6 my-4 max-sm:flex max-sm:flex-col">
        {projectArray.map((project, i) => (
          <Card key={i} className="w-[290px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {project.title}
                  </h4>
                </div>
              </div>
              <Button
                className={`${
                  project.level === "Beginner"
                    ? "bg-[#A6D4FF]"
                    : project.level === "Intermediate"
                    ? "bg-[#fbff009c]"
                    : project.level === "Advanced"
                    ? "bg-[#74FC82]"
                    : ""
                } text-foreground border-default-200`}
                color="primary"
                radius="full"
                size="sm"
                variant={"bordered"}
              >
                {project.level}
              </Button>
            </CardHeader>
            <CardFooter className="gap-4 flex justify-between">
              <div className="flex items-center gap-1">
                <Image src={project.icon} alt={project.title} />
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
export default Feature;
