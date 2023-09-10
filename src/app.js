/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".es", ".uk"];
  const list = document.getElementById("list");
  function DomainGenerator(arr1, arr2, arr3, arr4) {
    let result = "";
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; i < arr2.length; j++) {
        for (let k = 0; i < arr3.length; k++) {
          for (let l = 0; i < arr4.length; l++) {
            result.push([arr1[i] + arr2[j] + arr3[k] + arr4[l]]);
          }
        }
      }
    }
    console.log(result);
    list.innerHTML = "<p>" + +"</p>";
    Helo;
  }

  // console.log(DomainGenerator(pronoun, adj, noun, dom));
  console.log("Hello Rigo from the console!");
};
