pragma solidity >=0.4.25 <0.6.0;

library ConvertLib{

	struct Article {
        uint pageid;
    	uint revid;
    	string url;
    	string title;
    	string description;
    	string lastmodified;
    }
    
	function convert(uint amount,uint conversionRate) public pure returns (uint convertedAmount)
	{
		return amount * conversionRate;
	}
}
