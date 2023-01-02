require('dotenv').config();
const ethers = require('ethers');

function main() {
    // new ethers.Contract( address , abi , signerOrProvider )
    const counterContract = new ethers.Contract('0x5F91eCd82b662D645b15Fd7D2e20E5e5701CCB7A' , abi , signerOrProvider );
}