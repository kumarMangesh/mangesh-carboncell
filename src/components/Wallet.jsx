import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Snackbar } from "@mui/material";
import { connectWallet } from "../services";

const Wallet = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const action = {
    label: "Connect Wallet",
    onClick: () => handleConnectWallet(),
  };

  const handleConnectWallet = () => {
    connectWallet()
      .then((response) => {
        if (response?.status === "error") {
          setErrorMessage(response?.message);
          handleSnackBar(true);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSnackBar = (status) => {
    setSnackBarOpen(status);
  };

  useEffect(() => {
    handleSnackBar(true);
  }, [errorMessage]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackBarOpen}
        severity={errorMessage ? "error" : "success"}
        autoHideDuration={4000}
        onClose={() => handleSnackBar(false)}
        message={errorMessage}
      />
      <Header title="Wallet" action={action} />
      <div>
        {walletAddress && <p>Connected with address: {walletAddress}</p>}
      </div>
    </>
  );
};

export default Wallet;
