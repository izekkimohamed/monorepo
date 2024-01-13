import React from "react";

function TotalDiplay() {
  return (
    <div className="bg-primary py-3 px-4 text-gray-50 text-lg font-semibold">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-3">
            <span className="text-right">Total:</span>
            <span className="text-right">
              {/* {data &&
                data.reduce((acc, curr) => acc + +curr.total, 0).toFixed(2)} */}
              3.00€s
            </span>
          </div>
          <div className="flex gap-3">
            <span>PVHT:</span>
            <span>
              {/* {data &&
                data.reduce(
                  (acc, curr) => Number((acc + +curr.totalPvht!).toFixed(2)),
                  0,
                )} */}
              3.00€
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-2">
            <span>TVA 20%:</span>
            <span>
              {/* {data
                .filter((item) => item.tva_code === "2")
                .map((item) => {
                  return item.total * (20 / 100);
                })
                .reduce((acc, curr) => Number((acc + +curr).toFixed(2)), 0)} */}
              2.0€
            </span>
          </div>
          <div className="flex gap-2">
            <span>TVA 5.5%:</span>
            <span>
              {/* {data
                .filter((item) => item.tva_code === "1")
                .map((item) => {
                  return item.total * (5.5 / 100);
                })
                .reduce((acc, curr) => Number((acc + +curr).toFixed(2)), 0)} */}
              3.1€
            </span>
          </div>
        </div>
        {/* <form className="flex gap-1 " onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            placeholder=""
            disabled={ticketMethods.length > 0 ? true : false}
            ref={inputRef}
            className="w-[50px] text-gray-950 font-bold text-lg"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </form> */}
      </div>
    </div>
  );
}

export default TotalDiplay;
