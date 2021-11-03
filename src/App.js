import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import Progress from './Components/Progress'
import DonationForm from './Components/DonationForm'

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

export default class App extends React.Component {
  render() {
    let count = 0;
    let total = 0;
    donations.map(donation =>{
total = total + donation.amount
count ++;
})
count +=1
    
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">     
            </section>
          <section className="">
          <Progress  max={targetAmount} amount={total}/>
          <DonationForm  counter={count}/> 
          </section>
        </main>
      </>
    );
  }
}
