import React, { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import axios from "axios";
import * as AXIOS_API from "@/constants/apiConstants";
import dayjs from "dayjs";
import { Textarea } from "../ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";

const HEADER = ["Question Number", "Title", "Solved Date", "Completed", "Link"];

interface RetrievedQuestion {
  [key: string]: any;
}
const viewDetails = (e: any) => {
  e.preventDefault();
  console.log("clicked details button");
};

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          `${AXIOS_API.BASE_URL}${AXIOS_API.API_ENDPOINTS.USER_QUESTION}`,
          {
            username: localStorage.getItem("userLoginName"),
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        if (res.status === 201) {
          console.log(res.data.retrieveAllUserQns);
          setRetrieveData(res.data.retrieveAllUserQns);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [retrieveData, setRetrieveData] = useState<RetrievedQuestion>([]);

  const viewDetails = (rowData: any) => {
    console.log("clicked ", rowData);
    setSelectedRowData(rowData);
    setModalVisible(true);
  };

  const handleEditNote = (rowData: any) => {
    console.log("editing note for ", rowData);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const [showModalState, setShowModalState] = useState<{
    [key: number]: boolean;
  }>({});

  const handleShowModal = (id: number) => {
    setShowModalState({ ...showModalState, [id]: true });
  };

  const handleCloseModal = (id: number) => {
    setShowModalState({ ...showModalState, [id]: false });
  };

  return (
    <>
      <div className="flex justify-center items-center pt-6">
        <h1 className="text-3xl font-bold ">{"Dashboard"} </h1>
      </div>
      <Table className="mt-4">
        <TableCaption>List of Questions</TableCaption>
        <TableHeader>
          <TableRow>
            {HEADER.map((header, idx) => (
              <TableHead key={idx}>{header}</TableHead>
            ))}
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {retrieveData.map((data: RetrievedQuestion, idx: number) => (
            <TableRow key={idx}>
              <TableCell>{data.question_number}</TableCell>
              <TableCell>{data.title}</TableCell>
              {/* <TableCell>{data.notes}</TableCell> */}
              <TableCell>
                {dayjs(data.solved_date).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell>
                {data.solved === true ? "Completed" : "Incomplete"}
              </TableCell>
              <TableCell>
                <a
                  href={data.question_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-2 hover:text-blue-400"
                >
                  {"Open Qns"}
                </a>
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => handleEditNote(data)}
                    >
                      Edit Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Notes</DialogTitle>
                      <DialogDescription>
                        Make changes to your notes here. Click save when you're
                        done.
                      </DialogDescription>
                    </DialogHeader>
                    {/* <div className="grid gap-4 py-4"> */}
                    {/* <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div> */}
                    <div>
                      <Label htmlFor="username" className="text-left">
                        Username
                      </Label>
                      <Textarea
                        id="username"
                        defaultValue={data.notes}
                        className="col-span-3"
                      />
                      {/* </div> */}
                    </div>
                    <DialogFooter>
                      <DialogClose>
                        <Button type="submit">Save changes</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                {/* <button
                  className="rounded-lg border border-gray-800 hover: transition duration-300 ease-in-out px-4 py-2"
                  type="button"
                  onClick={() => viewDetails(data)}
                >
                  View Notes
                </button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Dashboard;
