import { Box } from "@mui/material";
import React from "react";
import CreateProcess from "./components/CreateProcess";
import SingleProcess from "./components/SingleProcess";
import "./Processes.css";
function Processes() {
  const processes = [
    {
      name: "Process 1",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 2",
      backgroundColor: "lightpink",
      private: true,
    },
    {
      name: "Process 3",
      backgroundColor: "lightpink",
      private: true,
    },
    {
      name: "Process 4",
      backgroundColor: "lightpink",
      private: false,
    },
    {
      name: "Process 5",
      backgroundColor: "lightpink",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightpink",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
    {
      name: "Process 6",
      backgroundColor: "lightblue",
      private: false,
    },
  ];
  return (
    <Box className="dashboard-processes">
      <CreateProcess />
      {processes.map((p) => (
        <SingleProcess
          name={p.name}
          backgroundColor={p.backgroundColor}
          privateProcess={p.private}
        />
      ))}
    </Box>
  );
}

export default Processes;
