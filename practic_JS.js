     // 1. Create a variable “item_1”
    // 2. Assign variable item_1 number 5.
    // 3. Output  to the console item_1.
let item_1 = 5;
console.log (item_1); 

    // 4. Create a variable “item_2”
    // 5. Assign variable item_2 number 3.
    // 6. Output to the console log item_2.
let item_2 = 3;
console.log (item_2); 
    // 7. Create a variable “item_3”
    // 8. Assign variable item_3 summing item_1 и item_2.
    // 9. Output to the console item_3.
let item_3 = (item_1+item_2);
console.log (item_3); 
    // 10. Create a variable “item_4”
    // 11. Assign variable item_4 string “Yolochka”
    // 12. Output to the console item_4.
let item_4 = "Yolochka"
console.log (item_4); 
    // 13. Output to the consol result summing item_3 и item_4.
console.log (item_3 + item_4)
    // 14. Output to the console multiplication item_3 и item_4.
console.log (item_3 + " * " + item_4)
    // 15. Create a variable “item_5”
    // 16. Assign variable item_5 переменную item_3
let item_5 = item_3;
console.log(item_5);
    // 17. Create a variable item_6.
    // 18. Create a variable item_6_type
    // 19. Assign variable item_6 значение 15
    // 20. Assign variable item_6_type тип переменной item_6
let item_6 = 15;
let item_6_type = typeof(item_6);
    // 21. Output to the consol data type item_6 in the form ——  “item_6 == ”  item_6, 
    //  “item_6_type == ”  item_6_type ——  
console.log("item_6 == " + item_6_type + ","  + "item_6_type == " + item_6_type);
    // 22. Create a variable item_7 and Assign variable type item_6 в String.
    // 23. Create a variable item_7_type
let item_7 = String(item_6);
console.log(typeof(item_7));
    // 24. Assign variable item_7_type type of variable item_7
let item_7_type = typeof(item_7);
console.log(item_7_type);
    // 25. Output to the consol data type item_7 in the  form ——  “item_7 == ”  item_7, 
    //  “item_7_type == ”  item_7_type ——  
console.log("item_7 == " + typeof(item_7) + " , " + "item_7_type == " + typeof(item_7_type));
    // 26. Create a variable “age_1” and assign variable 10
    // 27. Create a variable “age_2” and assign variable 18
    // 28. Create a variable “age_3” and assign variable 60
let age_1 = 17;
let age_2  = 18;
let age_3 = 60;
            // 29. Create "if" in which to check the value of the variable age_1
            // 30. If age_1 < age_2, Output to the consol “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
if (age_1 < age_2){
    console.log("You don't have access cause your age is " + age_1 + " It's less then ")
            // 31. If age_1 >=  age_2 и age_1 <  age_3, Output to the consol “Welcome  !”
    } else if (age_1 >=  age_2 && age_1 <  age_3){
        console.log("Welcome")}
            // 32. If age_1  > age_3, Output to the consol “Keep calm and look Culture channel”.
    else if (age_1  >= age_3){
        console.log("Keep calm and look Culture channel")
            // 33. Otherwise withdraw “Technical work”.
} else {
    console.log("Technical work")
}