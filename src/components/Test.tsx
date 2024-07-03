import { useEffect, useState } from "react";
import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import axios from "axios";
import loding from "../assets/loading.gif";

const { VITE_MODEL_BASE_URL } = import.meta.env;

export function Test({
  image_url,
  open,
  confidence,
  setOpen,
}: {
  image_url: string;
  open: boolean;
  confidence: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [resImg, setResImg] = useState("");
  useEffect(() => {
    setResImg("");
    setOpen(false);
  }, [confidence, image_url, setOpen]);
  useEffect(() => {
    if (!open) return;
    axios
      .post(`${VITE_MODEL_BASE_URL}/detect`, {
        image_url,
        confidence,
      })
      .then((res) => {
        setResImg(res.data.response);
      });
  }, [open, image_url, confidence]);
  return (
    <DialogContent className="">
      <DialogHeader>
        <DialogTitle>Smooth Operator</DialogTitle>
      </DialogHeader>
      <div className="h-[500px] w-full flex items-center justify-center">
        {resImg ? (
          <img src={resImg} alt="" className="w-full h-full" />
        ) : (
          <img src={loding} alt="" />
        )}
      </div>
    </DialogContent>
  );
}
