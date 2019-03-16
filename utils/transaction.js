import stellarSdk from 'stellar-sdk';

export const transact = async (_publicKey, _secretKey, _receiverPublicKey, _amount) => {
	const server = new stellarSdk.Server('https://horizon-testnet.stellar.org');
	stellarSdk.Network.useTestNetwork();
	const sourceKeypair = stellarSdk.Keypair.fromSecret(_secretKey);
	const account = await server.loadAccount(_publicKey);
	const fee = await server.fetchBaseFee();

    const transaction = new stellarSdk.TransactionBuilder(account, {fee})
    .addOperation(stellarSdk.Operation.payment({
	    destination: _receiverPublicKey,
	    asset: stellarSdk.Asset.native(),
	    amount: _amount
  	}))
  	.setTimeout(30)
    .build();

    transaction.sign(sourceKeypair);
    
    try {
	  const transactionResult = await server.submitTransaction(transaction);
	  console.log(JSON.stringify(transactionResult, null, 2));
	  console.log('\nSuccess! View the transaction at: ');
	  console.log(transactionResult._links.transaction.href);
	  } catch(error) {
	  console.log('An error has occured:');
	  console.log(error);
	}
}

