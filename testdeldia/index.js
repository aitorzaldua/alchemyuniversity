import styles from '../styles/Home.module.css';
import { useState } from 'react';

import { ethers } from 'ethers';
import contractABI from './BuyMeACoffee.json';

const contractAddress = '0xD2F5f6D0DEebF0xDf41B601ACe7A0fDFcBeC132f31892Bb3d80B62fECcdDdA5b3c457FcEF78bE479aC';


const loadData = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(contractAddress, contractABI, provider)
  const dataObtained = await contract.getHelloWorld();
  alert (dataObtained);
}

export default function Home() {
  return (
    <div className={styles.container}>
    Click the button
    <button onClick={loadData}>click!</button>
    </div>
  )
}