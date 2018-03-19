$(document).ready(function(){

var familySize, // User-inputted family size (int)
var arrivedIn2018, // User-inputted info about when the family arrived (boolean) 
var familyGrant2018 = familySize * 1000, // Formula for calculating the grant size for families arriving in 2018 (int)
var englishSpeaker, // User-inputted info about whether the head of household speaks English (boolean)
var NGOs = ["Help Unlimited", "New Start", "Better Tomorrow", "Home Safe", "New Home"], // List of NGOs
var familySizeExpenseMap{ // Object storing the monthly estimated expenses by family size
	size: ["1", "2", "3", "4", "5+"], // Array storing family sizes
	expense: [800, 950, 1000, 1100, 1200]; // Array storing estimated expenses
}

})