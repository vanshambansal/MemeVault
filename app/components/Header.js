import { ethers } from "ethers"

function Header({ account, setAccount }) {

async function connenctHandler(){

    const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
    const account = ethers.getAddress(accounts[0])
    setAccount(accounts[0])  

}

  return (
    <header>
    <p className="brand">MemeVault</p>

    {account ? (
        <button  className="btn--fancy">[ {account.slice(0, 6) + '...' + account.slice(38, 42)} ]</button>
      ) : (
        <button onClick={connenctHandler}  className="btn--fancy">[ connect ]</button>
      )}    </header>
  );
}

export default Header;