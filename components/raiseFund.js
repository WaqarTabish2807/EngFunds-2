// const form = document.querySelector('form');
// const projectName = document.querySelector('#inpt1');
// const projectDescription = document.querySelector('#inpt2');
// const projectFundAmount = document.querySelector('#inpt3');
// const minimumContributionAmount = document.querySelector('#inpt4');
// const deadlineRaise = document.querySelector('#inpt5');
// const submitBtn = document.querySelector('#submitBtn');

// submitBtn.addEventListener('click', async (event) => {
//     event.preventDefault();

//     // Get the values of the input fields
//     const name = projectName.value;
//     const description = projectDescription.value;
//     const fundAmount = projectFundAmount.value;
//     const minimumAmount = minimumContributionAmount.value;
//     const deadline = deadlineRaise.value;

//     // Interact with the Ethereum network
//     try {
//         // Connect to the Ethereum provider (e.g. MetaMask)
//         if (window.ethereum) {
//             window.web3 = new Web3(window.ethereum);
//             await window.eth_requestAccounts;
//         } else if (window.web3) {
//             window.web3 = new Web3(window.web3.currentProvider);
//         } else {
//             throw new Error('No Ethereum provider found. Please install MetaMask.');
//         }

//         // Calculate the gas fees
//         const gasPrice = await window.web3.eth.getGasPrice();
//         const gasCost = gasPrice * 21000;

//         // Send the transaction
//         const transaction = await window.web3.eth.sendTransaction({
//             from: window.web3.currentProvider.selectedAddress,
//             to: '0x0000000000000000000000000000000000000000',
//             value: window.web3.utils.toWei(minimumAmount, 'ether'),
//             gas: 21000,
//             gasPrice: gasPrice,
//         });

//         // Redirect to the success page
//         window.location.href = "/public/createCampaign.html";
//     } catch (error) {
//         console.error(error);
//         alert(error.message);
//     }
// });





window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
            const fundRaiserContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
            const form = document.getElementById('form');
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const projectName = form.elements['projectName'].value;
                const projectDescription = form.elements['projectDescription'].value;
                const projectFundAmount = form.elements['projectFundAmount'].value;
                const minimumContributionAmount = form.elements['minimumContributionAmount'].value;
                const deadlineRaise = form.elements['deadlineRaise'].value;
                fundRaiserContract.methods.setData(projectName, projectDescription, projectFundAmount, minimumContributionAmount, deadlineRaise)
                    .send({ from: web3.eth.defaultAccount })
                    .then((receipt) => {
                        console.log(receipt);
                    });
            });
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('No web3? You should consider trying MetaMask!');
    }
});
