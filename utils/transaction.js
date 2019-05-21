import stellarSdk from 'stellar-sdk';
const server = new stellarSdk.Server('https://horizon-testnet.stellar.org');
stellarSdk.Network.useTestNetwork();

export const transact = (_publicKey, _secretKey, _receiverPublicKey, _amount, _code, _issuer) => {
    const promise = new Promise(async(resolve, reject) => {
    	try {
			const sourceKeypair = stellarSdk.Keypair.fromSecret(_secretKey);
			const account = await server.loadAccount(_publicKey);
			const fee = await server.fetchBaseFee();

	    const transaction = new stellarSdk.TransactionBuilder(account, {fee})
	    .addOperation(stellarSdk.Operation.payment({
		    destination: _receiverPublicKey,
		    asset: _code ? new stellarSdk.Asset(_code, _issuer) : stellarSdk.Asset.native(),
		    amount: _amount
	  	}))
	  	.setTimeout(30)
	    .build();

	    transaction.sign(sourceKeypair);	
		  const transactionResult = await server.submitTransaction(transaction);
		  console.log(JSON.stringify(transactionResult, null, 2));
		  console.log('\nSuccess! View the transaction at: ');
		  console.log(transactionResult._links.transaction.href);
		  resolve(true);
	  } catch(error) {
	  	console.log('An error has occured:');
	  	reject(error);
		}
	});
    return promise
}

