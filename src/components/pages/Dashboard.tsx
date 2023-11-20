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


const HEADER = ["Question Number", "Title", "Link", "Posted By", "Time Stamp"];
const SAMPLE_DATA = [
  {
    questionNum: 100,
    title: "Title 1",
    content: "Test content",
    timeStamp: "2023-10-22",
  },
  {
    questionNum: 100,
    title: "Title 1",
    content: "Test content",
    timeStamp: "2023-10-22",
  },
  {
    questionNum: 100,
    title: "Title 1",
    content: "Test content",
    timeStamp: "2023-10-22",
  },
  {
    questionNum: 100,
    title: "Title 1",
    content: "Test content",
    timeStamp: "2023-10-22",
  },
];


// console.log(Object.keys(SAMPLE_DATA).length)
const Dashboard = () => {
    useEffect(() => {}, []);
  return (
    <>
      <Table className="mt-4">
        <TableCaption>List of Questions</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead>Table Header 1</TableHead>
            <TableHead>Table Header 2</TableHead>
            <TableHead>Table Header 3</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="">
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 1</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Dashboard;
