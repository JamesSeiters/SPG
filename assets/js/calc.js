import * as params from '@params';
//console.log(params);
function calculateprice_CU() {
    var total = 0;
    var price = 0;
    
    // Price list import
    var de_price = params.de_price;
    var le_price = params.le_price;
    var ce_price = params.ce_price;
    var pr_price = params.pr_price;
    var ef_price = params.ef_price;
    var pf_price = params.pf_price;
    var ec_price = params.ec_price;
    var pc_price = params.pc_price;

    var discount = 0;
    var checkbox = document.getElementById("DE_check");
    // Developmental Editing
    if (DE_check.checked == true) {
        price = price + de_price;
        //if (PR_check.checked == true || CE_check.checked == true){
        // discount = 0.1
        //  }
    }
    // Line Editing
    var checkbox = document.getElementById("LE_check");
    if (LE_check.checked == true) {
        price = price + le_price;
    }
    // Copy Editing
    var checkbox = document.getElementById("CE_check");
    if (CE_check.checked == true) {
        price = price + ce_price;
        //  if (DE_check.checked == true || PR_check.checked == true){
        //  discount = discount + 0.1
        // }
    }
    // Proofreading
    var checkbox = document.getElementById("PR_check");
    if (PR_check.checked == true) {
        price = price + pr_price;
        // if (DE_check.checked == true || CE_check.checked == true){
        // discount = discount + 0.1
        // }
    }

    const tempcount = document.getElementById("wordcount_CU");
    const cleanedInput = tempcount.value.replace(/\D/g, '');
    //console.log(cleanedInput)
    const wordcount = parseFloat(cleanedInput);
    //console.log(wordcount);
    total = total + wordcount * price;
    //total = total - (total * discount);
    // Ebook Formatting
    var checkbox = document.getElementById("EF_check");
    if (EF_check.checked == true) {
        total = total + ef_price;
    }
    // Paperback Formatting
    var checkbox = document.getElementById("PF_check");
    if (PF_check.checked == true) {
        total = total + pf_price;
    }
    // Paperback Cover Design
    var checkbox = document.getElementById("PC_check");
    if (PC_check.checked == true) {
        total = total + pc_price;
    }
    // Ebook Cover Design
    var checkbox = document.getElementById("EC_check");
    if (EC_check.checked == true) {
        total = total + ec_price;
    }
    total = Math.round(total * 100) / 100;
    if (isNaN(total)) {
        total = 0;
    }
    document.getElementById("total_CU").innerHTML = "$" + total.toFixed(2);
}
window.calculateprice_CU = calculateprice_CU;