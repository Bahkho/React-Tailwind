import React from "react";

export default function Button(props) {
  return (
    <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
      {props.text}
    </button>
  );
}
