// Check if wallet address is already stored in local storage
if (localStorage.getItem("walletAddress")) {
    walletAddress = localStorage.getItem("walletAddress");
    connectWallet.innerHTML = `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length-4)}`;
} else {
    connectWallet.innerHTML = "Connect Wallet";
}

document.getElementById('connectWallet').addEventListener('click', event => {
    let account;
    let button = event.target;
    ethereum.request({ method: "eth_requestAccounts" }).then(accounts => {
        account = accounts[0];
        // Store the address in local storage
        localStorage.setItem("walletAddress", account);
        button.textContent = account.slice(0, 6) + "..." + account.slice(39);
        alert("Successfully connected to MetaMask Wallet");
    });
});

ethereum.on('accountsChanged', function (accounts) {
    if(!accounts.length){
        connectWallet.innerHTML = "Connect Wallet";
        localStorage.removeItem("walletAddress");
    }
});
