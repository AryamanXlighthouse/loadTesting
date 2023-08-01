import http from "k6/http";
import { sleep, check } from "k6";

let binFile = open("./ex3.mov", "b"); // replace with your file path

export let options = {
    stages: [
        { duration: '1m', target: 100 }, // ramp up to 100 VUs over 1 minute
        { duration: '1m', target: 200 }, // ramp up to 200 VUs over 1 minute
        { duration: '1m', target: 300 }, // ramp up to 300 VUs over 1 minute
        { duration: '1m', target: 400 }, // ramp up to 400 VUs over 1 minute
        { duration: '1m', target: 500 }, // ramp up to 500 VUs over 1 minute
        { duration: '1m', target: 600 }, // ramp up to 600 VUs over 1 minute
        { duration: '1m', target: 700 }, // ramp up to 700 VUs over 1 minute
        { duration: '1m', target: 800 }, // ramp up to 800 VUs over 1 minute
        { duration: '1m', target: 900 }, // ramp up to 900 VUs over 1 minute
        { duration: '1m', target: 1000 }, // ramp up to 1000 VUs over 1 minute
        { duration: '1m', target: 900 }, // ramp down to 900 VUs over 1 minute
        { duration: '1m', target: 800 }, // ramp down to 800 VUs over 1 minute
        { duration: '1m', target: 700 }, // ramp down to 700 VUs over 1 minute
        { duration: '1m', target: 600 }, // ramp down to 600 VUs over 1 minute
        { duration: '1m', target: 500 }, // ramp down to 500 VUs over 1 minute
        { duration: '1m', target: 400 }, // ramp down to 400 VUs over 1 minute
        { duration: '1m', target: 300 }, // ramp down to 300 VUs over 1 minute
        { duration: '1m', target: 200 }, // ramp down to 200 VUs over 1 minute
        { duration: '1m', target: 100 }, // ramp down to 100 VUs over 1 minute
        { duration: '1m', target: 0 }, // ramp down to 0 VUs over the next 1 minute
        ],
  };
  
  

export default function () {
  const data = {
    field: "this is a standard form field",
    file: http.file(binFile, "test.bin"),
  };
  const res = http.post("http://43.205.191.172/api/v0/add", data);

  check(res, {
    "is status 200": (r) => r.status === 200,
  });
  sleep(1);
}
