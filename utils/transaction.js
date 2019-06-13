import stellarSdk from 'stellar-sdk';
const server = new stellarSdk.Server('https://horizon-testnet.stellar.org');
stellarSdk.Network.useTestNetwork();

export const transact = (_publicKey, _secretKey, _receiverPublicKey, _amount, _code, _issuer) => {
    const promise = new Promise(async(resolve, reject) => {
    	try{
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
		    const response = await server.submitTransaction(transaction);
				resolve(response.hash);
	  }catch(e) {
	  	reject(e);
		}
	});
    return promise
}

export const changeTrust = (_publicKey, _secretKey, _code, _issuer) => {
    const promise = new Promise(async(resolve, reject) => {
    	try{
			const sourceKeypair = stellarSdk.Keypair.fromSecret(_secretKey);
			const account = await server.loadAccount(_publicKey);
			const fee = await server.fetchBaseFee();

	    const transaction = new stellarSdk.TransactionBuilder(account, {fee})
	    .addOperation(stellarSdk.Operation.changeTrust({
		    asset: new stellarSdk.Asset(_code, _issuer),
		    limit: '10000'
	  	}))
	  	.setTimeout(30)
	    .build();

	    transaction.sign(sourceKeypair);
	    const response = await server.submitTransaction(transaction);
			resolve(response.hash);
	  }catch(e) {
	  	reject(e);
	  }
	});
    return promise
}

