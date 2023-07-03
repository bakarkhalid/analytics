import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import GenericTable from "@/Components/Table";
import { ResultIcon } from "@/icons";
import React from "react";
import Searchbar from "@/Components/Searchbar";
import Link from "next/link";
import ParentComponent from "@/Components/ParentPagination"; 

const table = () => {
  const columns = [
    {
      title: "Keyword",
      dataIndex: "Keyword",
      key: "Keyword",
    },
    {
      title: "Receving Platform",
      dataIndex: "receving",
      key: "receving",
    },
    {
      title: "Recevied From User",
      dataIndex: "recevied",
      key: "recevied",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  const data = [
    {
      Keyword: "LordBGR",
      receving: "Telegram",
      recevied: "@username / +01 234 5678",
      date: "Sat May 6 2023",
    },
    {
      Keyword: "LordBGR",
      receving: "WhatsApp",
      recevied: "+01 234 5678",
      date: "Sat May 6 2023",
    },
    {
      Keyword: "LordBGR",
      receving: "Email",
      recevied: "username@mail.com ",
      date: "Sat May 6 2023",
    },
    {
      Keyword: "LordBGR",
      receving: "WhatsApp",
      recevied: "+01 234 5678",
      date: "Sat May 6 2023",
    },
    {
      Keyword: "LordBGR",
      receving: "Telegram",
      recevied: "@username / +01 234 5678",
      date: "Sat May 6 2023",
    },
    {
      Keyword: "LordBGR",
      receving: "WhatsApp",
      recevied: "+01 234 5678",
      date: "Sat May 6 2023",
    },
    {
      Keyword: "LordBGR",
      receving: "Email",
      recevied: "username@mail.com ",
      date: "Sat May 6 2023",
    },
    {
      Keyword: "LordBGR",
      receving: "WhatsApp",
      recevied: "+01 234 5678",
      date: "Sat May 6 2023",
    },
    {
      Keyword: "LordBGR",
      receving: "Email",
      recevied: "username@mail.com ",
      date: "Sat May 6 2023",
    },
  ];
  return (
    <>
      <Header isLogged/>
      <div className="main table-block">
        <Searchbar type="text" placeholder="LordBGR" text="Search" />
        <div className="result-wrap">
          <div className="result-area">
            <div className="text-area">
              <p>Search Results for “Keyword”</p>
            </div>
            <div className="icon-area">
              <Link href="#" ><ResultIcon /></Link>
            </div>
          </div>
          <GenericTable columns={columns} data={data} />
          <ParentComponent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default table;
