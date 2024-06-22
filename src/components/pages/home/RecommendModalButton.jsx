"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const checkboxItems = [
  { id: "display", label: "Display" },
  { id: "camera", label: "Camera" },
  { id: "battery", label: "Battery" },
  { id: "gaming", label: "Gaming" },
];
const priceRanges = [
  { id: "k10", label: "Below 10k", min: 0, max: 9999 },
  { id: "k15", label: "10K-15K", min: 10000, max: 14999 },
  { id: "k20", label: "15K-20K", min: 15000, max: 19999 },
  { id: "k25", label: "20K-25K", min: 20000, max: 24999 },
  { id: "k40", label: "25K-40K", min: 25000, max: 39999 },
  { id: "k40plus", label: "40K +", min: 40000, max: 300000 },
];


const RecommendModalButton = () => {
  const router = useRouter();
  const [effect, setEffect] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedItem, setCheckedItem] = useState(null);
  const [isRadioSelected, setIsRadioSelected] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setEffect((prevEffect) => !prevEffect);
    }, 500);


    return () => clearInterval(interval);
  }, []);


  const handleCheckboxChange = (id, isChecked) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: isChecked,
    }));
  };


  const handleBudgetChange = (id) => {
    setCheckedItem(id);
    setIsRadioSelected(!!id);
    const selectedRange = priceRanges.find((range) => range.id === id);
    console.log(
      `Selected Range: ${selectedRange.label}`,
      selectedRange.min,
      selectedRange.max
    );
  };


  const handleSubmit = () => {
    const defaultScoreValue = 500;
 
    const scoreParams = [];
 
    checkboxItems.forEach((item) => {
      const isChecked = checkedItems[item.id] || false;
 
      const scoreValue = isChecked ? 800 : defaultScoreValue;
 
      scoreParams.push(`${item.id}=${scoreValue}`);
    });
 
    const scoreQuery = scoreParams.join("&");
 
    const url = `/recommended/?${scoreQuery}`;
 
    if (checkedItem) {
      const selectedRange = priceRanges.find((range) => range.id === checkedItem);
      const budgetQuery = `pricemin=${selectedRange.min}&pricemax=${selectedRange.max}`;
 
      router.push(`${url}&${budgetQuery}`);
    } else {
      router.push(url);
    }
  };


  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className={`primary ${effect && "animate-wiggle "} `}>
            Recommend
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>What is your Priority?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-row">
            <div className="flex flex-col space-y-4">
              {checkboxItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={item.id}
                    onChange={(e) =>
                      handleCheckboxChange(item.id, e.target.checked)
                    }
                    checked={checkedItems[item.id] || false}
                  />
                  <label htmlFor={item.id} className="text-sm font-medium">
                    {item.label}
                  </label>
                </div>
              ))}
            </div>


            <div>
              <Image
                className="z-0 object-contain"
                src="/images/confused.webp"
                height={1000}
                width={1000}
                alt="img"
              />
            </div>
          </div>


          <DialogFooter className="sm:justify-between">
            <DialogClose asChild>
              <button type="button" className="secondary">
                CLOSE
              </button>
            </DialogClose>
            <Dialog className="relative">
              <DialogTrigger asChild className="right-5 absolute">
                <button className="primary">NEXT</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg ">
                <DialogHeader>
                  <DialogTitle>What is your budget?</DialogTitle>
                </DialogHeader>
                <div className="flex flex-row">
                  <div className="flex flex-col space-y-4">
                    {priceRanges.map((range) => (
                      <div
                        key={range.id}
                        className="flex items-center space-x-2 whitespace-pre"
                      >
                        <input
                          type="radio"
                          id={range.id}
                          name="range_price"
                          onChange={() => handleBudgetChange(range.id)}
                          checked={checkedItem === range.id}
                        />
                        <label
                          htmlFor={range.id}
                          className="text-sm font-medium"
                        >
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Image
                      className="z-0 object-center "
                      src="/images/confused.webp"
                      height={1000}
                      width={1000}
                      alt="img2"
                    />
                  </div>
                </div>


                <DialogFooter className="sm:justify-between">
                  <DialogClose asChild>
                    <button type="button" className="secondary">
                      BACK
                    </button>
                  </DialogClose>
                  {isRadioSelected && (
                    <button
                      type="button"
                      className="primary right-5 absolute"
                      onClick={handleSubmit}
                    >
                      SUBMIT
                    </button>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};


export default RecommendModalButton;





