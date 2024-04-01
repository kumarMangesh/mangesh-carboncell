import axios from "axios";
import Web3 from "web3";

export async function getPopulation() {
  try {
    const response = await axios.get(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCryptoPrice() {
  try {
    const response = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const connectWallet = async () => {
  if (typeof window.ethereum === "undefined") {
    return {
      message: "MetaMask not detected. Please install MetaMask extension.",
      status: "error",
    };
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
  } catch (error) {
    console.error(error);
    return {
      message: "Failed to connect to MetaMask. Please try again.",
      status: "error",
    };
  }
};
