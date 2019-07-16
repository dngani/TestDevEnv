# Purchase as smart contract
a seller can generate a smart contract with the order sum and the buyer have to confirm that he has received and pay it. The Buyer can also confirm that he has received the item. 

# Creation of the smart contract

we, as seller have to deploy a smart contract with the given order sum.

# Function Calls

## to abort the purchase (as seller)
```
Purchase.abort()
```
if the smart contract has been only created, and the msg.sender is the seller.

## To confirm receipt of the invoice (as buyer)
```
Purchase.confirmPurchase({value: valueToPay});
```
if the samrt contract has benn created and the msg.value is double the saved value.

## To confirm receipt of the item (as buyer)
```
Purchase.confirmReceived();
```
if the smart contract has been State.Locked and the msg.sender is the buyer.



